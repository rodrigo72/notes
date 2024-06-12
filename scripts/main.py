import os
import markdown
import re

IMAGE_PATH = 'public/attachments/'
START_DIR = 'C:\\Users\\rodri\\OneDrive\\Ambiente de Trabalho\\website\\digital-garden\\public'


def is_pdf(file_path):
    with open(file_path, 'rb') as file:
        header = file.read(4)
        return header == b'%PDF'


def is_image(file_path):
    with open(file_path, 'rb') as file:
        header = file.read(8)
        if header[:2] == b'\xFF\xD8':  # JPEG
            return True
        elif header[:8] == b'\x89PNG\r\n\x1a\n':  # PNG
            return True
        elif header[:6] in [b'GIF87a', b'GIF89a']:  # GIF
            return True
        elif header[:2] == b'BM':  # BMP
            return True
        elif header[:4] == b'\x00\x00\x01\x00':  # ICO
            return True
        return False


def is_markdown(file_path):
    return file_path.lower().endswith('.md')


def is_valid_url(string):
    regex = re.compile(
        r'^(https?:\/\/)?'  # http:// or https://
        r'([a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+)'  # domain name
        r'(\/.*)?$'  # path
    )
    return re.match(regex, string) is not None


def change_normal_md_image_paths(test):
    pattern = r'!\[([^\]]+)\]\(([^\)]+)\)'

    def replace_link(match):
        image_name = match.group(2).strip()
        if is_valid_url(image_name):
            return match.group(0)
        markdown_link = f'![{image_name}]({IMAGE_PATH + image_name})'
        return markdown_link

    return re.sub(pattern, replace_link, test)


def convert_obsidian_links_to_markdown(text):
    pattern = r'!\[\[([^\]]+)\]\]'

    def replace_link(match):
        image_name = match.group(1).strip()
        markdown_link = f'![{image_name}]({IMAGE_PATH + image_name})'
        print(markdown_link)
        return markdown_link

    return re.sub(pattern, replace_link, text)


def traverse_directory(path):
    output = []
    with os.scandir(path) as entries:
        for entry in entries:
            if entry.name[0] != '.':
                if entry.is_file():
                    relative_path = os.path.relpath(entry.path, start=START_DIR)
                    relative_path = relative_path.replace('\\', '/')
                    if is_pdf(entry.path):
                        name = re.sub(r'([\"\'])', r'\\\1', entry.name)
                        obj = {
                            'icon': 'pi pi-file-pdf',
                            'label': name,
                            'command': f"""() => {{tabs.value.push({{"type": "pdf","label": "{name}","path": "{relative_path}"}});currentTab.value = tabs.value.length - 1;}}"""
                        }
                        output.append(obj)
                    elif is_image(entry.path):
                        name = re.sub(r'([\"\'])', r'\\\1', entry.name)
                        obj = {
                            'icon': 'pi pi-image',
                            'label': name,
                            'command': f"""() => {{tabs.value.push({{"type": "image","label": "{name}","path": "{relative_path}"}});currentTab.value = tabs.value.length - 1;}}"""
                        }
                        output.append(obj)
                    elif is_markdown(entry.path):
                        markdown_content = get_markdown_content(entry.path)
                        markdown_content = change_normal_md_image_paths(markdown_content)
                        markdown_content = convert_obsidian_links_to_markdown(markdown_content)
                        html = markdown.markdown(markdown_content, extensions=[
                            'tables',
                            'fenced_code',
                            'codehilite',
                            'smarty',
                            'nl2br',
                            'sane_lists',
                            'extra',
                        ])
                        html = html.replace('\n', ' ')
                        html = re.sub(r'([\"\'])', r'\\\1', html)
                        name = re.sub(r'([\"\'])', r'\\\1', entry.name)
                        obj = {
                            'icon': 'pi pi-file',
                            'label': name,
                            'command': f"""() => {{tabs.value.push({{"type": "markdown","label": "{name}","path": "{relative_path}","content": "{html}"}});currentTab.value = tabs.value.length - 1;}}"""
                        }
                        output.append(obj)
                if entry.is_dir():
                    obj = {'icon': 'pi pi-folder', 'label': entry.name, 'items': traverse_directory(entry.path)}
                    output.append(obj)
    return output


def convert_markdown_to_html(input_path):
    with open(input_path, 'r', encoding='utf-8') as md_file:
        markdown_content = md_file.read()
    return markdown.markdown(markdown_content)


def get_markdown_content(input_path):
    with open(input_path, 'r', encoding='utf-8') as md_file:
        return md_file.read()


def arr_to_string(items, indent=0):
    result = '[\n'
    for item in items:
        result += ' ' * (indent + 2) + '{\n'

        result += ' ' * (indent + 4) + "label: '" + item['label'] + "',\n"
        result += ' ' * (indent + 4) + "icon: '" + item['icon'] + "',\n"

        if 'items' in item:
            result += ' ' * (indent + 4) + "items: " + arr_to_string(item['items'], indent + 4) + ',\n'

        if 'command' in item:
            command = item['command']
            result += ' ' * (indent + 4) + "command: " + command + ',\n'

        result += ' ' * (indent + 2) + '},\n'

    return result + ' ' * indent + ']'


if __name__ == '__main__':
    arr = traverse_directory(START_DIR)
    output_str = arr_to_string(arr)

    with open('./output.txt', 'w', encoding='utf-8') as file:
        file.write(output_str)
