<script setup>
    import { onMounted, onBeforeUnmount } from 'vue';
    import { ref } from "vue";
    import { NodeService } from '@/src/service/NodeService';

    import FloatLabel from 'primevue/floatlabel'
    import AutoComplete from 'primevue/autocomplete';
    import PanelMenu from 'primevue/panelmenu';
    import Button from 'primevue/button';
    import Terminal from 'primevue/terminal';
    import TerminalService from 'primevue/terminalservice'

    import Fuse from 'fuse.js'

    const currentTab = ref(-1);
    const tabs = ref([]);

    const lp_tree_items = ref(null);
    let search_info = ref(null);

    const get_search_info = (items) => {
        let arr = []
        for (let i = 0; i < items.length; i++) {
            if ('command' in items[i] && 'label' in items[i]) {
                arr.push(items[i]);
            } else if ('items' in items[i]) {
                arr.push(...get_search_info(items[i].items));
            }
        }
        return arr;
    }

    let fuse;
    onMounted(() => {
        NodeService.getTreeNodes(tabs, currentTab)
            .then((data) => {
                lp_tree_items.value = data;
                search_info.value = get_search_info(data);
                fuse = new Fuse(search_info.value, {
                    keys: ['label']
                });
            })
            .catch((error) => {
                console.error('Error fetching tree nodes:', error);
            });
        TerminalService.on('command', commandHandler);
    });

    onBeforeUnmount(() => {
        TerminalService.off('command', commandHandler);
    })

    const get_current_directory = (steps) => {
        let obj = lp_tree_items.value
        for (let i = 0; i < steps.length; i++) {
            obj = obj[steps[i]].items
        }
        return obj;
    }

    const is_directory = (steps) => {
        let obj = lp_tree_items.value
        for (let i = 0; i < steps.length; i++) {
            try {
                obj = obj[steps[i]]
                if ('items' in obj) {
                    obj = obj.items
                } else {
                    throw new Error("'items' not in obj");
                }
            } catch(e) {
                return false;
            }
        }
        return true;
    }

    const get_dir_item = (dir, item_name) => {
        for (let i = 0; i < dir.length; i++) {
            if (dir[i].label === item_name && !('items' in dir[i])) {
                return dir[i];
            }
        }
        return null;
    }

    const splitString = (str) => {
        const regex = /[^\s"]+|"([^"]*)"/g;
        const matches = [];
        let match;
        while ((match = regex.exec(str)) !== null) {
            if (match[1]) {
                matches.push(match[1]);
            } else {
                matches.push(match[0]);
            }
        }
        return matches;
    }

    let steps = [] 
    const commandHandler = (text) => {
        let response = ""
        const args = splitString(text)

        let current_ls = {}
        const dir = get_current_directory(steps);
        for (let i = 0; i < dir.length; i++) {
            current_ls[dir[i].label] = i;
        }

        if (args[0] === 'ls') {
            current_ls = {}
            const dir = get_current_directory(steps);
            for (let i = 0; i < dir.length; i++) {
                response += '"' + dir[i].label + '"  ';
                current_ls[dir[i].label] = i;
            }
        } else if (args[0] === 'cd') {
            if (args.length == 1) {
                steps = []
            } else if (args.length >= 2) {
                if (args[1] == "..") {
                    steps.pop();
                } else {
                    steps.push(current_ls[args[1].replace('\"\'', '')])
                    if (!is_directory(steps)) {
                        steps.pop();
                        response = "Invalid directory"
                    }
                }
            }
        } else if (args[0] === 'open') {
            if (args.length == 1) {
                response = 'Specify a file to open'
            } else if (args.length >= 2) {
                const dir = get_current_directory(steps);
                const item = get_dir_item(dir, args[1].replace('\"\'', ''))
                if (item) {
                    item.command();
                    response = "Opening file ..."
                } else {
                    response = "Invalid"
                }
            }
        } else if (args[0] === 'help') {
            response = `commands = [ls, cd, open, help]`;
        } else {
            response = "Unknown command: " + command;
        }
        
        TerminalService.emit('response', response);
    }

    function findSuggestions(input) {
        const result = fuse.search(input);
        return result.map(item => item.item);
    }

    const name = ref("Rodrigo Monteiro");
    const value = ref("");
    const lp_search_items = ref([]);
    const lp_search_items_full = ref([]);

    const search = (event) => {
        const suggestions = findSuggestions(event.query);
        let arr = []
        let arr_full = []
        for (let i = 0; i < suggestions.length; i++) {
            arr.push(suggestions[i].label)
            arr_full.push(suggestions[i])
        }
        lp_search_items.value = arr;
        lp_search_items_full.value = arr_full;
    }

    const terminalIsOpened = ref(false);
    const closeTab = (index) => {
        const removed_tab = tabs.value.splice(index, 1);
        if (currentTab.value >= index) {
            currentTab.value = Math.max(currentTab.value - 1, 0);
            if (removed_tab[0].type === 'terminal') {
                terminalIsOpened.value = false;
                steps = [];
            }
        }
        if (tabs.value.length === 0) {
            currentTab.value = -1;
        }
    }

    const openTab = (index) => {
        currentTab.value = index;
    }

    const getCurrentTabContent = () => {
        if (currentTab.value >= 0 && currentTab.value < tabs.value.length) {
            const t = tabs.value[currentTab.value].type;
            if (t === "markdown") {
                return tabs.value[currentTab.value].content;
            } else if (t === "image" || t === "pdf") {
                return tabs.value[currentTab.value].path;
            }
        }
        return '';
    }

    const getCurrentTabType = () => {
        if (currentTab.value >= 0 && currentTab.value < tabs.value.length) {
            return tabs.value[currentTab.value].type;
        }
        return '';
    }

    const maxTabNameLength = 20;
    const getTabName = (index) => {
        let name = tabs.value[index].label;
        if (name.length > maxTabNameLength) {
            return name.slice(0, maxTabNameLength - 3) + "...";
        }
        return name;
    }

    const isSelected = (index) => {
        return index === currentTab.value;
    }

    const searchSelection = () => {
        for (let i = 0; i < lp_search_items.value.length; i++) {
            if (lp_search_items_full.value[i].label === value.value) {
                lp_search_items_full.value[i].command();
                return;
            }
        }
    }

    const closeAllTabs = () => {
        tabs.value = [];
        currentTab.value = -1;
        terminalIsOpened.value = false;
        steps = [];
    }

    const openTerminal = () => {
        if (terminalIsOpened.value == false) {
            tabs.value.push({
                'label': 'Terminal',
                'type': 'terminal'
            })
            currentTab.value = tabs.value.length - 1;
            terminalIsOpened.value = true;
            steps = [];
        }
    }

    const openSuggestion = () => {
        const suggestions = [
            {
                "type": "pdf",
                "label": "Conceção de modelos de aprendizagem e decisão",
                "path": "LEI 3º Ano/2º Semestre/Aprendizagem e Decisão Inteligentes/relatorio-g21.pdf"
            },
            {
                "type": "pdf",
                "label": "Cloud Computing",
                "path": "LEI 3º Ano/1º Semestre/Sistemas Distribuídos/report.pdf"
            },
            {
                "type": "pdf",
                "label": "Transferência rápida e fiável de múltiplos servidores em simultâneo",
                "path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP2/relatorio_tp2.pdf"
            }
        ]
        const randomIndex = Math.floor(Math.random() * suggestions.length);
        tabs.value.push(suggestions[randomIndex]);
        currentTab.value = tabs.value.length - 1;

    }

</script>

<template>
    <div id="home-page">
        <div id="lpanel">
            <div id="lp-name" class="lp-grid-area">
                <p>{{ name }}</p>
            </div>
            <div id="lp-search-bar" class="lp-grid-area">
                <FloatLabel>
                    <AutoComplete v-model="value" inputId="ac" :suggestions="lp_search_items" @complete="search" @keydown.enter="searchSelection"></AutoComplete>
                    <label for="ac">Search</label>
                </FloatLabel>
            </div>
            <div id="lp-tree" class="lp-grid-area">   
                <PanelMenu :model="lp_tree_items" class="w-full md:w-20rem" />
            </div>  
        </div>
        <div id="cpanel">
            <div id="cp-tab-names">
                <div v-for="(item, index) in tabs" :key="index" class="cp-tab-header" :class="{ 'cp-tab-header-selected': isSelected(index) }">
                    <div @click="openTab(index)" class="cp-tab-name">{{ getTabName(index) }}</div>
                    <svg @click="closeTab(index)" class="cp-tab-close-btn bi bi-x-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>
            <div id="cp-tab-content">
                <div v-if="getCurrentTabType() === 'markdown'" v-html="getCurrentTabContent()"></div>
                <div v-if="getCurrentTabType() === 'image'" class="cp-image-container">
                    <img class="cp-image":src="getCurrentTabContent()">
                </div>
                <embed v-if="getCurrentTabType() === 'pdf'" style="width: 100%; height: 99%" :src="getCurrentTabContent()" />
                <Terminal 
                    v-if="getCurrentTabType() === 'terminal'"
                    prompt="vault $"
                    aria-label="PrimeVue Terminal Service"
                />
            </div>
        </div>
        <div id="rpanel">
            <Button label="Recent" icon="pi pi-clock" severity="secondary" text disabled/>
            <Button label="Suggestion" icon="pi pi-star" severity="secondary" text @click="openSuggestion"/>
            <Button v-if="terminalIsOpened" label="Terminal" icon="pi pi-microchip" severity="secondary"text @click="openTerminal" disabled/>
            <Button v-else="terminalIsOpened" label="Terminal" icon="pi pi-microchip" severity="secondary"text @click="openTerminal"/>
            <Button label="Close Tabs" icon="pi pi-times" severity="danger" text @click="closeAllTabs"/>
        </div>
    </div>
</template>


<style>
    .p-component, .p-inputtext {
        font-family: "Schibsted Grotesk", sans-serif;
    }
    .p-inputtext {
        background: #212121;
    }
    .p-inputtext:enabled:focus {
        outline: 1px solid white;
    }

    .p-panelmenu-panel {
        min-width: 250px;
    }

    .p-panelmenu-header-content, 
    .p-panelmenu-content {
        background: #212121;
    }

    :root {
        --primary-color: white;
    }

    .p-autocomplete-panel {
        background: #212121;
    }


    .p-button-secondary:not(:disabled):hover {
        background: #212121;
    }

    .p-button-secondary:not(:disabled):active {
        background: #212121d0;
    }

    .p-button-secondary {
        background: #262626;
    }

    .p-terminal {
        background: #1b1b1b;
        height: 520px;
        font-family: "Fira Code", monospace;
        /* border-color: rgba(255, 255, 255, 0.164); */
        border-width: 0px;
    }

    .p-terminal-input {
        font-family: "Fira Code", monospace;
    }

</style>

<style scoped>
    #home-page {
        padding: 30px;
        background-color: #262626;
        display: grid;
        grid-template-areas: "lpanel cpanel rpanel";
        grid-template-columns: 3fr 8fr 2fr;
        grid-column-gap: 25px;
        grid-template-rows: 650px;
        height: 100vh;
    }

    /* --- Left Panel --- */

    #lpanel {
        padding: 10px;
        border-radius: 10px;
        grid-area: lpanel;
        display: grid;
        grid-template-areas: 
        "name"
        "search"
        "tree";
        grid-template-rows: 1fr 1fr 9fr;
        grid-template-columns: 1fr;
        grid-row-gap: 10px;        
    }

    #lp-name {
        grid-area: name;
        color: #ebebec;
        font-size: 21px;
        font-weight: 700;
    }

    #lp-search-bar {
        grid-area: search;
    }

    #lp-tree {
        grid-area: tree;
        align-items: start;
        overflow-y: auto;
        padding-top: 25px;
    }
    
    .lp-grid-area {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }

    /* --- Center Panel --- */

    #cpanel {
        padding: 10px;
        border-radius: 10px;
        grid-area: cpanel;
        display: grid;
        grid-template-areas: 
        "tab-names"
        "tab-content";
        grid-template-rows: 55px;
        grid-template-columns: 1fr;
        grid-row-gap: 10px;   
    }

    #cp-tab-names {
        grid-area: tab-names;
        border-radius: 10px;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: row;
        overflow-y: scroll;
        column-gap: 12px;
    }

    #cp-tab-content {
        grid-area: tab-content;
        border: 1px dashed rgba(255, 255, 255, 0.347);
        border-radius: 10px;
        padding: 20px;
        overflow: scroll;
    }

    .cp-tab-name {
        color: #ebebec;
        font-size: 16px;
        cursor: pointer;
    }

    .cp-tab-header {
        background-color: #212121;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.208);
        padding-left: 16px;
        padding-right: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        column-gap: 12px;
        align-items: center;
        flex-shrink: 0; /* importante */
        transition: background-color 0.1s ease-in-out;
    }

    .cp-tab-header-selected {
        background-color: rgba(255, 255, 255, 0.068);
        border-width: 2px;
    }

    .cp-tab-header:hover {
        background-color: rgba(255, 255, 255, 0.068);
    }

    .cp-tab-close-btn {
        width: 17px;
        height: 17px;
        cursor: pointer;
        z-index: 10;
    }

    .cp-tab-close-btn path {
        transition: fill 0.1s ease-in-out;
    }

    .cp-tab-close-btn:hover path {
        fill: rgba(248, 134, 134, 0.762);
    }

    .cp-image-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cp-image {
        max-width: 100%;
    }

    .cp-pdf-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* --- Right Panel --- */

    #rpanel {
        margin: 10px;
        margin-top: 75px;
        padding: 10px;
        border-radius: 10px;
        grid-area: rpanel;
        border: 1px dashed rgba(255, 255, 255, 0.347);

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

        margin-top: 260px;
        margin-bottom: 190px;
    }

    /* --- Reactive CSS --- */

    @media screen and (width <= 1200px) {
        #rpanel {
            display: none;
        }
        #home-page {
            grid-template-areas: "lpanel cpanel";
            grid-template-columns: 1fr 4fr;
        }
    }

    @media screen and (width <= 800px) {
        #lpanel {
            display: none;
        }
        #home-page {
            grid-template-areas: "cpanel";
            grid-template-columns: 1fr;
        }
    }

</style>