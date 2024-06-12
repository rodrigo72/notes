export const NodeService = {
    getTreeNodesData(tabs, currentTab) {
        return [
          {
            label: 'Attachments',
            icon: 'pi pi-folder',
            items: [
              {
                label: 'Cdiminished.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Cdiminished.png","path": "Attachments/Cdiminished.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Chords_of_the_Major_Scale.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Chords_of_the_Major_Scale.png","path": "Attachments/Chords_of_the_Major_Scale.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Circle_of_4th_-_5th.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Circle_of_4th_-_5th.png","path": "Attachments/Circle_of_4th_-_5th.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Cm7b5.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Cm7b5.png","path": "Attachments/Cm7b5.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Dom7th.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Dom7th.png","path": "Attachments/Dom7th.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_1.png","path": "Attachments/drawing_1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_10.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_10.png","path": "Attachments/drawing_10.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_100.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_100.png","path": "Attachments/drawing_100.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_101.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_101.png","path": "Attachments/drawing_101.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_102.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_102.png","path": "Attachments/drawing_102.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_103.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_103.png","path": "Attachments/drawing_103.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_104.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_104.png","path": "Attachments/drawing_104.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_105.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_105.png","path": "Attachments/drawing_105.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_106.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_106.png","path": "Attachments/drawing_106.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_107.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_107.png","path": "Attachments/drawing_107.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_108.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_108.png","path": "Attachments/drawing_108.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_109.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_109.png","path": "Attachments/drawing_109.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_11.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_11.png","path": "Attachments/drawing_11.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_110.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_110.png","path": "Attachments/drawing_110.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_111.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_111.png","path": "Attachments/drawing_111.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_112.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_112.png","path": "Attachments/drawing_112.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_113.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_113.png","path": "Attachments/drawing_113.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_114.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_114.png","path": "Attachments/drawing_114.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_115.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_115.png","path": "Attachments/drawing_115.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_116.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_116.png","path": "Attachments/drawing_116.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_117.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_117.png","path": "Attachments/drawing_117.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_118.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_118.png","path": "Attachments/drawing_118.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_119.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_119.png","path": "Attachments/drawing_119.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_12.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_12.png","path": "Attachments/drawing_12.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_120.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_120.png","path": "Attachments/drawing_120.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_121.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_121.png","path": "Attachments/drawing_121.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_122.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_122.png","path": "Attachments/drawing_122.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_123.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_123.png","path": "Attachments/drawing_123.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_124.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_124.png","path": "Attachments/drawing_124.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_125.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_125.png","path": "Attachments/drawing_125.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_126.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_126.png","path": "Attachments/drawing_126.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_127.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_127.png","path": "Attachments/drawing_127.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_128.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_128.png","path": "Attachments/drawing_128.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_129.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_129.png","path": "Attachments/drawing_129.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_13.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_13.png","path": "Attachments/drawing_13.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_130.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_130.png","path": "Attachments/drawing_130.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_131.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_131.png","path": "Attachments/drawing_131.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_132.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_132.png","path": "Attachments/drawing_132.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_133.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_133.png","path": "Attachments/drawing_133.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_134.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_134.png","path": "Attachments/drawing_134.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_135.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_135.png","path": "Attachments/drawing_135.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_136.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_136.png","path": "Attachments/drawing_136.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_137.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_137.png","path": "Attachments/drawing_137.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_138.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_138.png","path": "Attachments/drawing_138.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_139.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_139.png","path": "Attachments/drawing_139.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_14.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_14.png","path": "Attachments/drawing_14.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_140.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_140.png","path": "Attachments/drawing_140.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_141.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_141.png","path": "Attachments/drawing_141.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_142.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_142.png","path": "Attachments/drawing_142.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_143.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_143.png","path": "Attachments/drawing_143.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_144.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_144.png","path": "Attachments/drawing_144.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_145.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_145.png","path": "Attachments/drawing_145.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_146.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_146.png","path": "Attachments/drawing_146.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_147.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_147.png","path": "Attachments/drawing_147.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_148.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_148.png","path": "Attachments/drawing_148.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_149.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_149.png","path": "Attachments/drawing_149.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_15.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_15.png","path": "Attachments/drawing_15.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_150.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_150.png","path": "Attachments/drawing_150.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_151.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_151.png","path": "Attachments/drawing_151.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_152.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_152.png","path": "Attachments/drawing_152.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_153.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_153.png","path": "Attachments/drawing_153.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_154.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_154.png","path": "Attachments/drawing_154.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_155.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_155.png","path": "Attachments/drawing_155.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_156.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_156.png","path": "Attachments/drawing_156.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_157.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_157.png","path": "Attachments/drawing_157.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_158.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_158.png","path": "Attachments/drawing_158.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_159.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_159.png","path": "Attachments/drawing_159.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_16.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_16.png","path": "Attachments/drawing_16.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_160.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_160.png","path": "Attachments/drawing_160.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_161.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_161.png","path": "Attachments/drawing_161.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_162.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_162.png","path": "Attachments/drawing_162.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_163.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_163.png","path": "Attachments/drawing_163.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_164.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_164.png","path": "Attachments/drawing_164.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_165.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_165.png","path": "Attachments/drawing_165.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_166.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_166.png","path": "Attachments/drawing_166.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_167.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_167.png","path": "Attachments/drawing_167.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_168.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_168.png","path": "Attachments/drawing_168.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_169.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_169.png","path": "Attachments/drawing_169.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_17.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_17.png","path": "Attachments/drawing_17.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_170.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_170.png","path": "Attachments/drawing_170.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_171.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_171.png","path": "Attachments/drawing_171.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_172.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_172.png","path": "Attachments/drawing_172.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_173.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_173.png","path": "Attachments/drawing_173.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_174.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_174.png","path": "Attachments/drawing_174.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_175.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_175.png","path": "Attachments/drawing_175.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_176.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_176.png","path": "Attachments/drawing_176.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_177.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_177.png","path": "Attachments/drawing_177.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_178.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_178.png","path": "Attachments/drawing_178.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_179.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_179.png","path": "Attachments/drawing_179.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_18.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_18.png","path": "Attachments/drawing_18.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_180.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_180.png","path": "Attachments/drawing_180.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_181.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_181.png","path": "Attachments/drawing_181.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_19.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_19.png","path": "Attachments/drawing_19.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_2.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_2.png","path": "Attachments/drawing_2.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_20.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_20.png","path": "Attachments/drawing_20.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_21.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_21.png","path": "Attachments/drawing_21.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_22.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_22.png","path": "Attachments/drawing_22.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_23.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_23.png","path": "Attachments/drawing_23.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_24.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_24.png","path": "Attachments/drawing_24.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_25.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_25.png","path": "Attachments/drawing_25.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_26.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_26.png","path": "Attachments/drawing_26.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_27.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_27.png","path": "Attachments/drawing_27.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_28.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_28.png","path": "Attachments/drawing_28.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_29.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_29.png","path": "Attachments/drawing_29.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_3.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_3.png","path": "Attachments/drawing_3.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_30.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_30.png","path": "Attachments/drawing_30.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_31.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_31.png","path": "Attachments/drawing_31.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_32.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_32.png","path": "Attachments/drawing_32.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_33.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_33.png","path": "Attachments/drawing_33.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_34.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_34.png","path": "Attachments/drawing_34.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_35.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_35.png","path": "Attachments/drawing_35.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_36.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_36.png","path": "Attachments/drawing_36.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_37.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_37.png","path": "Attachments/drawing_37.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_38.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_38.png","path": "Attachments/drawing_38.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_39.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_39.png","path": "Attachments/drawing_39.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_4.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_4.png","path": "Attachments/drawing_4.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_40.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_40.png","path": "Attachments/drawing_40.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_41.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_41.png","path": "Attachments/drawing_41.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_42.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_42.png","path": "Attachments/drawing_42.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_43.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_43.png","path": "Attachments/drawing_43.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_44.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_44.png","path": "Attachments/drawing_44.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_45.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_45.png","path": "Attachments/drawing_45.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_46.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_46.png","path": "Attachments/drawing_46.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_47.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_47.png","path": "Attachments/drawing_47.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_48.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_48.png","path": "Attachments/drawing_48.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_49.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_49.png","path": "Attachments/drawing_49.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_5.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_5.png","path": "Attachments/drawing_5.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_50.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_50.png","path": "Attachments/drawing_50.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_51.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_51.png","path": "Attachments/drawing_51.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_52.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_52.png","path": "Attachments/drawing_52.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_53.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_53.png","path": "Attachments/drawing_53.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_54.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_54.png","path": "Attachments/drawing_54.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_55.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_55.png","path": "Attachments/drawing_55.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_56.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_56.png","path": "Attachments/drawing_56.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_57.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_57.png","path": "Attachments/drawing_57.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_58.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_58.png","path": "Attachments/drawing_58.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_59.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_59.png","path": "Attachments/drawing_59.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_6.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_6.png","path": "Attachments/drawing_6.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_60.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_60.png","path": "Attachments/drawing_60.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_61.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_61.png","path": "Attachments/drawing_61.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_62.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_62.png","path": "Attachments/drawing_62.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_63.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_63.png","path": "Attachments/drawing_63.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_64.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_64.png","path": "Attachments/drawing_64.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_65.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_65.png","path": "Attachments/drawing_65.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_66.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_66.png","path": "Attachments/drawing_66.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_67.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_67.png","path": "Attachments/drawing_67.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_68.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_68.png","path": "Attachments/drawing_68.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_69.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_69.png","path": "Attachments/drawing_69.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_7.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_7.png","path": "Attachments/drawing_7.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_70.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_70.png","path": "Attachments/drawing_70.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_71.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_71.png","path": "Attachments/drawing_71.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_72.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_72.png","path": "Attachments/drawing_72.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_73.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_73.png","path": "Attachments/drawing_73.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_74.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_74.png","path": "Attachments/drawing_74.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_75.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_75.png","path": "Attachments/drawing_75.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_76.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_76.png","path": "Attachments/drawing_76.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_77.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_77.png","path": "Attachments/drawing_77.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_78.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_78.png","path": "Attachments/drawing_78.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_79.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_79.png","path": "Attachments/drawing_79.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_8.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_8.png","path": "Attachments/drawing_8.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_80.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_80.png","path": "Attachments/drawing_80.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_81.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_81.png","path": "Attachments/drawing_81.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_82.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_82.png","path": "Attachments/drawing_82.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_83.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_83.png","path": "Attachments/drawing_83.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_84.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_84.png","path": "Attachments/drawing_84.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_85.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_85.png","path": "Attachments/drawing_85.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_86.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_86.png","path": "Attachments/drawing_86.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_87.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_87.png","path": "Attachments/drawing_87.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_88.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_88.png","path": "Attachments/drawing_88.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_89.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_89.png","path": "Attachments/drawing_89.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_9.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_9.png","path": "Attachments/drawing_9.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_90.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_90.png","path": "Attachments/drawing_90.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_91.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_91.png","path": "Attachments/drawing_91.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_92.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_92.png","path": "Attachments/drawing_92.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_93.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_93.png","path": "Attachments/drawing_93.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_94.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_94.png","path": "Attachments/drawing_94.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_95.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_95.png","path": "Attachments/drawing_95.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_96.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_96.png","path": "Attachments/drawing_96.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_97.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_97.png","path": "Attachments/drawing_97.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_98.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_98.png","path": "Attachments/drawing_98.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'drawing_99.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "drawing_99.png","path": "Attachments/drawing_99.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'g1-1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "g1-1.png","path": "Attachments/g1-1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'h1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "h1.png","path": "Attachments/h1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'h2.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "h2.png","path": "Attachments/h2.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'h3.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "h3.png","path": "Attachments/h3.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'h4.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "h4.png","path": "Attachments/h4.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'h5.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "h5.png","path": "Attachments/h5.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'h6.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "h6.png","path": "Attachments/h6.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'h7.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "h7.png","path": "Attachments/h7.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'h8.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "h8.png","path": "Attachments/h8.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'II_V_I.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "II_V_I.png","path": "Attachments/II_V_I.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-1.png","path": "Attachments/image-1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-2.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-2.png","path": "Attachments/image-2.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-3.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-3.png","path": "Attachments/image-3.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-4.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-4.png","path": "Attachments/image-4.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-5.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-5.png","path": "Attachments/image-5.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-6.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-6.png","path": "Attachments/image-6.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image.png","path": "Attachments/image.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Major7th.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Major7th.png","path": "Attachments/Major7th.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Minor_7th.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Minor_7th.png","path": "Attachments/Minor_7th.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20220903180503.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20220903180503.png","path": "Attachments/Pasted_image_20220903180503.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20220924191142.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20220924191142.png","path": "Attachments/Pasted_image_20220924191142.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327024214.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327024214.png","path": "Attachments/Pasted_image_20230327024214.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327024311.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327024311.png","path": "Attachments/Pasted_image_20230327024311.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327024657.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327024657.png","path": "Attachments/Pasted_image_20230327024657.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327024946.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327024946.png","path": "Attachments/Pasted_image_20230327024946.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327025125.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327025125.png","path": "Attachments/Pasted_image_20230327025125.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327025554.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327025554.png","path": "Attachments/Pasted_image_20230327025554.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327025654.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327025654.png","path": "Attachments/Pasted_image_20230327025654.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327030416.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327030416.png","path": "Attachments/Pasted_image_20230327030416.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327030748.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327030748.png","path": "Attachments/Pasted_image_20230327030748.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327030929.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327030929.png","path": "Attachments/Pasted_image_20230327030929.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327031127.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327031127.png","path": "Attachments/Pasted_image_20230327031127.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327031728.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327031728.png","path": "Attachments/Pasted_image_20230327031728.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327031825.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327031825.png","path": "Attachments/Pasted_image_20230327031825.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327031929.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327031929.png","path": "Attachments/Pasted_image_20230327031929.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327032236.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327032236.png","path": "Attachments/Pasted_image_20230327032236.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327032505.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327032505.png","path": "Attachments/Pasted_image_20230327032505.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327032742.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327032742.png","path": "Attachments/Pasted_image_20230327032742.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'repetition.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "repetition.png","path": "Attachments/repetition.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-1.png","path": "Attachments/s7image-1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-2.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-2.png","path": "Attachments/s7image-2.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-3.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-3.png","path": "Attachments/s7image-3.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-4.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-4.png","path": "Attachments/s7image-4.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-5.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-5.png","path": "Attachments/s7image-5.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-6.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-6.png","path": "Attachments/s7image-6.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image.png","path": "Attachments/s7image.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'timing.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "timing.png","path": "Attachments/timing.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u1.png","path": "Attachments/u1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u10.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u10.png","path": "Attachments/u10.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u11.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u11.png","path": "Attachments/u11.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u12.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u12.png","path": "Attachments/u12.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u13.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u13.png","path": "Attachments/u13.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u14.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u14.png","path": "Attachments/u14.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u15.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u15.png","path": "Attachments/u15.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u16.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u16.png","path": "Attachments/u16.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u17.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u17.png","path": "Attachments/u17.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u18.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u18.png","path": "Attachments/u18.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u19.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u19.png","path": "Attachments/u19.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u2.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u2.png","path": "Attachments/u2.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u20.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u20.png","path": "Attachments/u20.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u21.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u21.png","path": "Attachments/u21.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u22.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u22.png","path": "Attachments/u22.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u23.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u23.png","path": "Attachments/u23.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u24.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u24.png","path": "Attachments/u24.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u25.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u25.png","path": "Attachments/u25.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u3.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u3.png","path": "Attachments/u3.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u4.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u4.png","path": "Attachments/u4.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u5.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u5.png","path": "Attachments/u5.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u6.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u6.png","path": "Attachments/u6.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u7.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u7.png","path": "Attachments/u7.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u8.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u8.png","path": "Attachments/u8.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'u9.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "u9.png","path": "Attachments/u9.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Voicings_1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Voicings_1.png","path": "Attachments/Voicings_1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Voicings_2.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Voicings_2.png","path": "Attachments/Voicings_2.png"});currentTab.value = tabs.value.length - 1;},
              },
            ],
          },
          {
            label: 'LEI 1º Ano',
            icon: 'pi pi-folder',
            items: [
              {
                label: '1º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Programação Funcional',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Classes e Tipos.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Classes e Tipos.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Classes e Tipos.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Funções de ordem superior.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Funções de ordem superior.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Funções de ordem superior.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Input Output.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Input Output.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Input Output.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Listas por compreensão.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Listas por compreensão.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Listas por compreensão.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Tipos algébricos e árvores.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Tipos algébricos e árvores.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Tipos algébricos e árvores.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: 'GitHub Links.md',
                icon: 'pi pi-file',
                command: () => {tabs.value.push({"type": "markdown","label": "GitHub Links.md","path": "LEI 1º Ano/GitHub Links.md","content": "<h1>1º ano</h1> <h2>1º semestre</h2> <ul> <li> <p>Programação funcional</p> <ul> <li><a href=\"https://github.com/rodrigo72/Programacao-Funcional-Haskell\">Teoria e exercícios - 50 questões e fichas</a></li> </ul> </li> <li> <p>Laboratórios de informática I</p> <ul> <li><a href=\"https://github.com/rodrigo72/Block-Dude\">Block Dude (Undertale)</a></li> </ul> </li> </ul> <h2>2º semestre</h2> <ul> <li>Programação Imperativa<ul> <li><a href=\"https://github.com/rodrigo72/Programacao-Imperativa-C\">Exercícios - 100 questões e fichas</a></li> </ul> </li> <li>Laboratórios de Informática II<ul> <li><a href=\"https://github.com/rodrigo72/Programacao-Imperativa-C/tree/main/Programa%C3%A7%C3%A3o%20Imperativa/Exerc%C3%ADcios%20de%20LI%20II\">Exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/Stack-Machine\">Stack Machine</a></li> </ul> </li> </ul>"});currentTab.value = tabs.value.length - 1;},
              },
            ],
          },
          {
            label: 'LEI 2º Ano',
            icon: 'pi pi-folder',
            items: [
              {
                label: '1º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Algoritmos e Complexidade',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Graph notes.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Graph notes.pdf","path": "LEI 2º Ano/1º Semestre/Algoritmos e Complexidade/Graph notes.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Regras dos Somatórios.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Regras dos Somatórios.pdf","path": "LEI 2º Ano/1º Semestre/Algoritmos e Complexidade/Regras dos Somatórios.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Stylus_write_algc.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Stylus_write_algc.pdf","path": "LEI 2º Ano/1º Semestre/Algoritmos e Complexidade/Stylus_write_algc.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Why3 - Ficha 1.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Why3 - Ficha 1.pdf","path": "LEI 2º Ano/1º Semestre/Algoritmos e Complexidade/Why3 - Ficha 1.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Arquitetura de Computadores',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'OpenMP book notes.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "OpenMP book notes.pdf","path": "LEI 2º Ano/1º Semestre/Arquitetura de Computadores/OpenMP book notes.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'OpenMP.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "OpenMP.pdf","path": "LEI 2º Ano/1º Semestre/Arquitetura de Computadores/OpenMP.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Processamento Vetorial.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Processamento Vetorial.pdf","path": "LEI 2º Ano/1º Semestre/Arquitetura de Computadores/Processamento Vetorial.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Stylus_write_ArqC.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Stylus_write_ArqC.pdf","path": "LEI 2º Ano/1º Semestre/Arquitetura de Computadores/Stylus_write_ArqC.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Estatística Aplicada',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Classificação de Dados.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Classificação de Dados.md","path": "LEI 2º Ano/1º Semestre/Estatística Aplicada/Classificação de Dados.md","content": "<h1>Classificação dos dados segundo a escala em que são expressos</h1> <p>Os dados podem ser expressos em quatro escalas distintas: <strong>nominal, ordinal, de intervalo/ intervalar, e absoluta</strong>.<br /> Os dados expressos numa das duas primeiras escalas dizem-se <strong>qualitativos</strong>, enquanto que os que forem expressos numa das duas últimas se dizem <strong>quantitativos</strong>.</p> <h1>Dados qualitativos: Escala Nominal e Escala Ordinal</h1> <p>Os dados dizem-se expressos numa escala nominal quando cada um deles dor identificado apenas pela atribuição de um nome que designa uma classe.</p> <p>As classes devem ser exaustivas (qualquer dado pertence a uma das classes), mutuamente exclusivas (cada dado pertence a uma só classe) e não ordenáveis (não existe nenhum critério relevante que permita estabelecer preferência por qualquer classe em relação às restantes).</p> <p><em>Exemplos</em>:<br /> - Classificação de pessoas pela cor do cabelo: preto, castanho, loiro, etc.<br /> - Classificação dos consumidores de bens pelo sexo: masculino ou feminino.</p> <p>Em relação aos dados expressos numa escala nominal, deve observar-se que as classes podem ser designadas, em particular, por números. Neste caso, para que a escala seja nominal, não se poderá estabelecer qualquer relação de ordem entre tais números.</p> <p><em>Exemplos</em>:<br /> - Classificação dos consumidores pelo sexo, no âmbito de um programa de computador: 0 (feminino) ou 1 (masculino)</p> <p>Aquilo que distingue a escala ordinal da escala nominal é a possibilidade de se estabelecer uma ordenação das classes nas quais os dados são classificados, segundo algum critério relevante.</p> <p>Exemplos:<br /> - Classificações obtidas pelos alunos num teste de Estatística: mau, medíocre, suficiente, bom ou muito bom.<br /> - Classificação dos clientes segundo o volume de encomendas que colocam: clientes A (muito importantes), B (importantes), ou C (menos importantes).</p> <h1>Dados Quantitativos: Escala de intervalo e Escala Absoluta</h1> <p>No caso da <strong>escala de intervalo</strong>/ intervalar, os dados são diferenciados e ordenados por números expressos numa escala cuja <strong>origem é arbitrária</strong>. Neste caso pode-se atribuir um significado à diferença entre esses números, mas não à razão entre eles. (Nota: Provavelmente devido aos axiomas da adição e principalmente da multiplicação, em que o conceito de 0 é bastante importante.)</p> <p><em>Exemplo</em>:<br /> Temperaturas registadas, em ºC, às 8 horas de dias sucessivos. Note-se que, neste caso, se em três dias consecutivos a temperatura atingir 5ºC, 10ºC e 20ºC, não faz sentido dizer-se que no terceiro dia esteve duas vezes mais quente do que no segundo.<br /> De facto, se a temperatura fosse expressa noutra escala, a razão entre as temperaturas registadas naqueles dias seria diferente (por exemplo, na escala Fahrenheit, aquela razão seria 68/50 = 1.36). Já em relação à variação de temperatura entre o segundo e o terceiro dia se pode afirmar, qualquer que seja a escala de temperaturas, que foi dupla da variação de temperatura entre o primeiro e o segundo dia.</p> <p>Contrariamente ao que sucede com a escala de intervalo, a escala absoluta tem uma origem fixa. Nesta escala, zero significa nada (note-se que, anteriormente, dizer que a temperatura era 0ºC não significava que não havia temperatura). Como consequência do facto de a origem ser fixa, a razão entre dados expressos numa escala absoluta passa a ter significado, tal como sucede com o intervalo entre tais dados.</p> <p><em>Exemplos</em>:<br /> - Pesos de pessoas, expressos em kg.<br /> - Volumes de investimento, expressos em contos</p> <h1>Resumo</h1> <ul> <li>Escala Nominal: Dados classificados por categorias não ordenadas</li> <li>Escala Ordinal: Dados classificados por categorias ordenadas</li> <li>Escala de Intervalo: Dados expressos numa escala numérica com origem arbitrária</li> <li>Escala absoluta: Dados expressos numa escala numérica com origem fixa</li> </ul>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Conceção de um procedimento adequado para a seleção de uma ou mais amostras.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Conceção de um procedimento adequado para a seleção de uma ou mais amostras.md","path": "LEI 2º Ano/1º Semestre/Estatística Aplicada/Conceção de um procedimento adequado para a seleção de uma ou mais amostras.md","content": "<p>O processo de seleção de uma amostra a partir de uma população designa-se por <strong>amostragem</strong>.<br /> Para se poderem fazer inferências a partir de uma amostra e medir o rigor de tais inferências, esta deve ser selecionada de acordo com um processo de <strong>amostragem probabilística</strong>. Para este tipo de amostragem, cada um dos elementos da população tem hipóteses de ser incluído na amostra, sendo possível medir com rigor qual a possibilidade de tal suceder, através do cálculo da respetiva probabilidade.</p> <p>De todos os processos de amostragem probabilistica, o mais importante é o de <strong>amostragem aleatória</strong>. Este processo garante que todos os elementos da população têm as mesmas hipóteses de ser integrados na amostra. Através dele, consegue evitar-se qualquer <strong>enviesamento de seleção</strong>, isto é, afasta-se qualquer tendência sistemática para sub-representar ou sobrerrepresentar na amostra alguns elementos da população.</p>"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'FCD',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Análise de Sinais.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Análise de Sinais.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Análise de Sinais.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Análise de Sistemas.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Análise de Sistemas.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Análise de Sistemas.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Conversão analógico a digital.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Conversão analógico a digital.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Conversão analógico a digital.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Espectro de um sinal.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Espectro de um sinal.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Espectro de um sinal.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Multiplexagem.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Multiplexagem.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Multiplexagem.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Quantização.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Quantização.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Quantização.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'stylus_write_fcd.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "stylus_write_fcd.pdf","path": "LEI 2º Ano/1º Semestre/FCD/stylus_write_fcd.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Teorema da Amostragem.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Teorema da Amostragem.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Teorema da Amostragem.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Teoria da Informação - Parte 1.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Teoria da Informação - Parte 1.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Teoria da Informação - Parte 1.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Física Moderna',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Relatividade - Resoluções.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatividade - Resoluções.pdf","path": "LEI 2º Ano/1º Semestre/Física Moderna/Relatividade - Resoluções.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'LI3',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Relatório - 1º Fase.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatório - 1º Fase.pdf","path": "LEI 2º Ano/1º Semestre/LI3/Relatório - 1º Fase.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Relatório - 2ª Fase.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatório - 2ª Fase.pdf","path": "LEI 2º Ano/1º Semestre/LI3/Relatório - 2ª Fase.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: '2º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Bases de Dados',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Anotações aleatórias.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações aleatórias.pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/Anotações aleatórias.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'ApresentaçãoFinal.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "ApresentaçãoFinal.pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/ApresentaçãoFinal.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Exercícios do teste modelo 2023.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Exercícios do teste modelo 2023.pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/Exercícios do teste modelo 2023.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Rabiscos (alguma teoria e exercícios).pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Rabiscos (alguma teoria e exercícios).pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/Rabiscos (alguma teoria e exercícios).pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Relatório.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatório.pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/Relatório.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Investigação Operacional',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Teoria e Exercícios',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'exercicios_grafos.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "exercicios_grafos.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/exercicios_grafos.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'exercicios_tp6.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "exercicios_tp6.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/exercicios_tp6.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'exercicios_tp7.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "exercicios_tp7.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/exercicios_tp7.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Problemas-de-transportes-Grafos-Bipartidos.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "Problemas-de-transportes-Grafos-Bipartidos.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/Problemas-de-transportes-Grafos-Bipartidos.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Problemas-de-transportes-Introdução.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "Problemas-de-transportes-Introdução.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/Problemas-de-transportes-Introdução.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Problemas-de-transportes-Redes-com-capacidade.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "Problemas-de-transportes-Redes-com-capacidade.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/Problemas-de-transportes-Redes-com-capacidade.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Problemas-de-transportes-Redes-sem-capacidade.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "Problemas-de-transportes-Redes-sem-capacidade.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/Problemas-de-transportes-Redes-sem-capacidade.png"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'TPs',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'tp1_enunciado.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "tp1_enunciado.pdf","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/TPs/tp1_enunciado.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'tp1_relatorio.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "tp1_relatorio.pdf","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/TPs/tp1_relatorio.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'tp2_enunciado.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "tp2_enunciado.pdf","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/TPs/tp2_enunciado.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'tp2_relatorio.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "tp2_relatorio.pdf","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/TPs/tp2_relatorio.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'MNOnL',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Aproximação dos mínimos quadrados.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Aproximação dos mínimos quadrados.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Aproximação dos mínimos quadrados.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Integração numérica.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Integração numérica.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Integração numérica.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Interpolação polinomial.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Interpolação polinomial.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Interpolação polinomial.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Métodos iterativos de Newton e da Secante - Exercícios.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Métodos iterativos de Newton e da Secante - Exercícios.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Métodos iterativos de Newton e da Secante - Exercícios.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Rotinas Matlab.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Rotinas Matlab.pdf","path": "LEI 2º Ano/2º Semestre/MNOnL/Rotinas Matlab.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Sistemas de equações não lineares.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Sistemas de equações não lineares.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Sistemas de equações não lineares.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Sistemas de euqações lineares - exercícios.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Sistemas de euqações lineares - exercícios.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Sistemas de euqações lineares - exercícios.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Zeros de equações não lineares.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Zeros de equações não lineares.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Zeros de equações não lineares.png"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Programação Orientada a Objetos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Java Program Design - Anotações Ch. 1.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 1.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 1.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Java Program Design - Anotações Ch. 2.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 2.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 2.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Java Program Design - Anotações Ch. 3.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 3.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 3.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Java Program Design - Anotações Ch. 4.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 4.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 4.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Java Program Design - Anotações Ch. 5.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 5.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 5.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Relatório_TP.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatório_TP.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Relatório_TP.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Redes de Computadores',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Resumos RC 2023.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Resumos RC 2023.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/Resumos RC 2023.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'TPs',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'RC-TP1-Resumo-PL106.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "RC-TP1-Resumo-PL106.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/TPs/RC-TP1-Resumo-PL106.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'RC-TP2-PL106.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "RC-TP2-PL106.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/TPs/RC-TP2-PL106.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'RC-TP3-PL106.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "RC-TP3-PL106.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/TPs/RC-TP3-PL106.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'RC-TP4-PL106.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "RC-TP4-PL106.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/TPs/RC-TP4-PL106.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Sistemas Operativos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Anotações - Guião 1.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Guião 1.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Anotações - Guião 1.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Anotações - Guião 2.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Guião 2.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Anotações - Guião 2.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Anotações - Guião 3.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Guião 3.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Anotações - Guião 3.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Anotações - Guião 4.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Guião 4.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Anotações - Guião 4.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'AnotaçõesTeoria.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "AnotaçõesTeoria.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/AnotaçõesTeoria.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Efficient struct storage.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Efficient struct storage.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Efficient struct storage.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: 'GitHub Links.md',
                icon: 'pi pi-file',
                command: () => {tabs.value.push({"type": "markdown","label": "GitHub Links.md","path": "LEI 2º Ano/GitHub Links.md","content": "<h1>2º ano</h1> <h2>1º semestre</h2> <ul> <li>Algoritmos e Complexidade<ul> <li><a href=\"https://github.com/rodrigo72/UC-AlgC\">Teoria e exercícios (c/ backtracking)</a></li> </ul> </li> <li>Fundamentos de Comunicação de Dados<ul> <li><a href=\"https://github.com/rodrigo72/UC-FCD\">Teoria e algoritmo Shannon-Fano</a></li> </ul> </li> <li>Laboratórios de Informática III<ul> <li><a href=\"https://github.com/rodrigo72/LI3-Exercicios\">Exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/LI3\">Projeto</a></li> </ul> </li> </ul> <h2>2º semestre</h2> <ul> <li>Bases de dados<ul> <li><a href=\"https://github.com/rodrigo72/UC-Bases-de-Dados/tree/main/Other\">Teoria e exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/UC-Bases-de-Dados/tree/main/Projeto\">Bookstore</a></li> </ul> </li> <li>Investigação Operacional<ul> <li><a href=\"https://github.com/rodrigo72/UC-IO/tree/main/Other\">Teoria e exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/UC-IO\">Trabalhos práticos</a></li> </ul> </li> <li>Métodos Numéricos e Otimização não Linear<ul> <li><a href=\"https://github.com/rodrigo72/UC-MNOnL\">Teoria e exercícios (c/ Matlab)</a></li> </ul> </li> <li>Redes de Computadores<ul> <li><a href=\"https://github.com/rodrigo72/UC-RC/blob/main/Resumos%20RC%202023.pdf\">Resumos</a></li> <li><a href=\"https://github.com/rodrigo72/UC-RC/tree/main/TPs\">Trabalhos práticos</a></li> </ul> </li> <li>Sistemas Operativos<ul> <li><a href=\"https://github.com/rodrigo72/SO-exercicios\">Guiões</a></li> <li><a href=\"https://github.com/rodrigo72/Projeto-SO\">Projeto</a></li> </ul> </li> <li>Programação Orientada a Objetos<ul> <li><a href=\"https://github.com/rodrigo72/Vinted-OOP-Project\">Vinted</a></li> </ul> </li> </ul>"});currentTab.value = tabs.value.length - 1;},
              },
            ],
          },
          {
            label: 'LEI 3º Ano',
            icon: 'pi pi-folder',
            items: [
              {
                label: '1º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Comunicações por Computador',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Teoria',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'DNS.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "DNS.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/DNS.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Encaminhamento.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Encaminhamento.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/Encaminhamento.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'HTTP (continuação).pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "HTTP (continuação).pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/HTTP (continuação).pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'HTTP.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "HTTP.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/HTTP.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Nível de transporte.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Nível de transporte.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/Nível de transporte.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Segurança em Redes.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Segurança em Redes.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/Segurança em Redes.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'TP1',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'CC - TP1 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "CC - TP1 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP1/CC - TP1 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'CC-Enunciado-TP1-2023-2024.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "CC-Enunciado-TP1-2023-2024.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP1/CC-Enunciado-TP1-2023-2024.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'CC-TP1-PL7-G9.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "CC-TP1-PL7-G9.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP1/CC-TP1-PL7-G9.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'TP2',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'CC-Enunciado-TP2-2023-2024.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "CC-Enunciado-TP2-2023-2024.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP2/CC-Enunciado-TP2-2023-2024.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Draft dos protocolos.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Draft dos protocolos.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP2/Draft dos protocolos.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'relatorio_tp2.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "relatorio_tp2.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP2/relatorio_tp2.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Cálculo de Programas',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Fichas',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Aula PL 01.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 01.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 01.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 02.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 02.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 02.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 03.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 03.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 03.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 04.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 04.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 04.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 05.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 05.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 05.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 06.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 06.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 06.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula Pl 07.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula Pl 07.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula Pl 07.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Teoria',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Aula T2 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula T2 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Aula T2 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula T3 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula T3 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Aula T3 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula T4 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula T4 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Aula T4 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula T5 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula T5 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Aula T5 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Is abstraction key to computing.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Is abstraction key to computing.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Is abstraction key to computing.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Testes',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Preparação - o outro documento estava muito grande.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Preparação - o outro documento estava muito grande.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Testes/Preparação - o outro documento estava muito grande.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Preparação para o teste.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Preparação para o teste.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Testes/Preparação para o teste.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'DSS',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Fichas',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Aula PL 01.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 01.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Aula PL 01.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 02.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 02.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Aula PL 02.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 04.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 04.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 04.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 05 pt.2.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 05 pt.2.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 05 pt.2.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 05.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 05.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 05.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 06.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 06.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 06.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 07.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 07.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 07.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 3.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 3.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 3.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Projeto',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Enunciado - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Enunciado - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Projeto/Enunciado - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Projeto DSS - Documento técnico.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Projeto DSS - Documento técnico.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Projeto/Projeto DSS - Documento técnico.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Teoria',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Anotações de teoria - Use cases.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Anotações de teoria - Use cases.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/Anotações de teoria - Use cases.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'T09 - APIs e subsistemas.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "T09 - APIs e subsistemas.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/T09 - APIs e subsistemas.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'T10 - Modelação comportamental.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "T10 - Modelação comportamental.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/T10 - Modelação comportamental.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'T11-12 - Modelação estrutural.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "T11-12 - Modelação estrutural.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/T11-12 - Modelação estrutural.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'T13-14 - Modelação comportamental.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "T13-14 - Modelação comportamental.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/T13-14 - Modelação comportamental.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Inteligência Artificial',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Anotações - teoria 01.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - teoria 01.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Anotações - teoria 01.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Aula PL 02.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 02.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Aula PL 02.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Aula PL 04.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 04.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Aula PL 04.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Fichas.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Fichas.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Fichas.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Lógica.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Lógica.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Lógica.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Population based.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Population based.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Population based.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Procura local e otimização.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Procura local e otimização.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Procura local e otimização.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'LI4',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'asp.net.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "asp.net.pdf","path": "LEI 3º Ano/1º Semestre/LI4/asp.net.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'casos_de_uso_draft.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "casos_de_uso_draft.md","path": "LEI 3º Ano/1º Semestre/LI4/casos_de_uso_draft.md","content": "<p>Template:</p> <p>Use Case:<br />     Descrição:<br />     Pré-condição:<br />     Pós-condição:<br />     Fluxo normal:</p> <hr /> <ul> <li>criar conta</li> <li>fazer login</li> <li>editar o perfil</li> <li>consultar</li> <li>pesquisar</li> <li>adicionar</li> <li>criar</li> <li> <p>apagar</p> </li> <li> <p>criar conta</p> </li> <li>login</li> <li>editar conta</li> <li>pesquisar</li> <li>consulta de um lote</li> <li>consulta de um leilão</li> <li>consulta das listas de favoritos</li> <li>consulta das notificações</li> <li>consulta das categorias</li> <li>consulta dos lotes ganhos</li> <li>consulta dos lotes submetidos</li> <li>submeter um item ou conjunto de itens</li> <li>criar um lote</li> <li>aprovar um lote</li> <li>editar um lote</li> <li>remover um lote</li> <li>entrar num leilão</li> <li>sair de um leilão</li> <li>criar um leilão</li> <li>editar um leilão</li> <li>remover um leilão</li> </ul> <p>Use Case: Criar conta <br />     Descrição:<br />     Pré-condição:<br />     Pós-condição:<br />     Fluxo normal:</p>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'ideias_para_requisitos.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "ideias_para_requisitos.md","path": "LEI 3º Ano/1º Semestre/LI4/ideias_para_requisitos.md","content": "<p>registo do utilizador DONE<br /> autenticação na aplicação DONE<br /> terminar sessão DONE<br /> editar conta DONE<br /> pesquisar item / por artista    DONE<br /> notificações DONE<br /> consulta de um item DONE<br /> consulta das categorias DONE<br /> adicionar item à lista de favoritos DONE<br /> adicionar categoria à lista de favoritos DONE<br /> adicionar vendedor à lista de favoritos DONE<br /> avaliar um vendedor &ndash; DEIXOU DE EXISTIR (VENDEDORES SAO ABSTRAIDOS PELA EMPRESA)<br /> consulta do perfil do vendedor &ndash; DEIXOU DE EXISTIR<br /> remoção dos favoritos DONE<br /> consult<br /> ar lista de itens favoritos DONE<br /> consultar lista de vendedores favoritos DONE<br /> consultar lista de categorias favoritas DONE<br /> avaliar um vendedor depois de uma compra &ndash; DEIXOU DE EXISTIR<br /> lista de itens ganhos DONE<br /> lista de itens vendidos DONE<br /> lista de itens por vender (agendados e não agendados) DONE<br /> utilizador: submeter item DONE<br /> utilizador: pedido de remoção do leilão (?)<br /> administrador: iniciar ou parar leilão/ eventos<br /> administrador: adicionar e agendar item, editar, apagar<br /> administrador: enviar notificações para outros utilizadores<br /> colocar uma licitação <br /> registo como administrador<br /> entrar no leilao DONE<br /> sair do leilao DONE</p> <p>pagina de gestao de leilões<br />     - registo como administrador DONE<br />     - opçao de o leilao começar automaticamente DONE<br />     - criação de um leilão DONE<br />     - opção de começar manualmente DONE<br />     - lista de submissoes de items<br />     - aprovar ou nao um item<br />     - adicionar item a leilao DONE<br />     - remover item do leilao DONE<br />     - envio de notificaçoes para utilizadores</p> <hr /> <p>é obrigatório registar antes de poder licitar ou vender<br /> é possível assistir ao progresso de leilões públicos disponíveis sem estar registado<br /> um utilizador deve conseguir fazer login e registar<br /> payment method<br /> name on the card, card number, expiration, cvv, billing address (option: same as shipping address)<br /> Bank Account (ACH)<br /> morada de envio<br /> address, apt/suit, company (optional), country, state/province, city, zip/postal-code<br /> two-factor authentication: phone number<br /> é enviado um resultado da avaliação do registo por email<br /> um utilizador pode vender um produto submetendo um formulário que será avaliado e aprovado ou não aprovado pelos administradores<br /> o formulário deve conter informação detalhada acerca do produto:<br /> verificar identidade do utilizador, caso ainda não tenha sido feito<br /> foto que identifique a pessoa, foto(s) de um documento de identificação<br /> histórico: se foi comprado previamente e por que valor; como foi obtido; comprado/ herdado/ encontrado/ presente/ outro<br /> diversas fotos do produto<br /> dimensões do produto<br /> artista(s) a que está associado<br /> ano de criação/ de uso <br /> estado: excelentes condições, péssimas condições, etc.<br /> tipo de artigo e as suas características: vinil, instrumento, vestuário, etc.<br /> comprovação de originalidade/ assinatura/ etc. se necessário/ possível<br /> em geral a comissão de comprador é de 15% e a  comissão de vendedor de 20% (apenas quando é vendido), mas pode variar de item para item e de acordo com o price range da licitação final<br /> o utilizador tem um histórico de participação em leilões<br /> o utilizador tem um histórico de itens comprados<br /> cada item ou conjunto selecionado de itens a leiloar é anunciado previamente, existindo um respectivo countdown e starting price<br /> um utilizador pode escolher seguir determinadas categorias de itens<br /> um utilizador pode escolher ser notificado quando um determinado auction irá começar<br /> o item que o vendedor quer vender depois de aprovado tem de ser enviado para a empresa, e a empresa irá confirmar a receção do item por email ou pelo sistema/app/website<br /> o tipo de leilão será um ascending-clock-auction, com um primeiro desempate de second-price sealed-bid e um segundo desempate com base no tempo de saída.<br /> tanto vendedores como compradores pagam por transporte, com exceção de casos específicos<br /> lista de produtos favoritos<br /> schedule global/ individual<br /> vendedor não pode licitar num produto próprio</p> <p>&ndash; Divisão dos casos de uso por categorias</p> <ul> <li>Conta do utilizador</li> </ul> <p>Criar conta<br /> Login<br /> Redefinir palavra passe<br /> Adicionar novo método de pagamento<br /> Adicionar nova morada</p> <ul> <li>Consultas</li> </ul> <p>Pesquisar<br /> Consulta de um lote<br /> Consulta de um leilão<br /> Consulta das listas de favoritos<br /> Consulta das notificações<br /> Consulta das categorias<br /> Consulta de uma categoria<br /> Consulta dos lotes ganhos<br /> Consulta dos lotes submetidos<br /> Remoção de um item da lista de favoritos</p> <ul> <li>Funcionamento dos lotes</li> </ul> <p>Submeter lote<br /> Aprovar submissão<br /> Criar um lote<br /> Editar um lote</p> <ul> <li>Funcionamento dos leilões<br /> Entrar num leilão<br /> Sair de um leilão<br /> Ganhar um lote<br /> Criar um leilão<br /> Editar um leilão<br /> Remover um leilão</li> </ul>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Online Auctions - Theory and Examples.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Online Auctions - Theory and Examples.pdf","path": "LEI 3º Ano/1º Semestre/LI4/Online Auctions - Theory and Examples.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'relatorio-li4-g19.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "relatorio-li4-g19.pdf","path": "LEI 3º Ano/1º Semestre/LI4/relatorio-li4-g19.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Requirements.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Requirements.pdf","path": "LEI 3º Ano/1º Semestre/LI4/Requirements.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Sistemas Distribuídos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Perterson\'s, & Bakery Algorithm.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Perterson\'s, & Bakery Algorithm.pdf","path": "LEI 3º Ano/1º Semestre/Sistemas Distribuídos/Perterson's, & Bakery Algorithm.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'report.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "report.pdf","path": "LEI 3º Ano/1º Semestre/Sistemas Distribuídos/report.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: '2º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Análise de Projetos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Plano de Negócios.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Plano de Negócios.pdf","path": "LEI 3º Ano/2º Semestre/Análise de Projetos/Plano de Negócios.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'relatorio.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "relatorio.pdf","path": "LEI 3º Ano/2º Semestre/Análise de Projetos/relatorio.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Aprendizagem e Decisão Inteligentes',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'ADI-teoria.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "ADI-teoria.pdf","path": "LEI 3º Ano/2º Semestre/Aprendizagem e Decisão Inteligentes/ADI-teoria.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Anotações - Religious Affiliation in the Twenty-First Century.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Religious Affiliation in the Twenty-First Century.pdf","path": "LEI 3º Ano/2º Semestre/Aprendizagem e Decisão Inteligentes/Anotações - Religious Affiliation in the Twenty-First Century.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'relatorio-g21.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "relatorio-g21.pdf","path": "LEI 3º Ano/2º Semestre/Aprendizagem e Decisão Inteligentes/relatorio-g21.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Computação Gráfica',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Relatórios',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Relatório CG - Fase 1.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Relatório CG - Fase 1.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Relatórios/Relatório CG - Fase 1.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Relatório CG - Fase 2.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Relatório CG - Fase 2.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Relatórios/Relatório CG - Fase 2.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Relatório CG - Fase 4.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Relatório CG - Fase 4.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Relatórios/Relatório CG - Fase 4.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Relatório CG -Fase 3.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Relatório CG -Fase 3.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Relatórios/Relatório CG -Fase 3.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Resolução de testes',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Teste 20122013.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Teste 20122013.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Resolução de testes/Teste 20122013.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Teste 2021.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Teste 2021.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Resolução de testes/Teste 2021.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Teste 2122.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Teste 2122.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Resolução de testes/Teste 2122.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Teste 2223.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Teste 2223.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Resolução de testes/Teste 2223.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Teoria',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Desenhar um boneco de neve & Camera.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Desenhar um boneco de neve & Camera.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Teoria/Desenhar um boneco de neve & Camera.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The Geometric Pipeline.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "The Geometric Pipeline.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Teoria/The Geometric Pipeline.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Interface Pessoa-Máquina',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Apresentação IPM.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Apresentação IPM.pdf","path": "LEI 3º Ano/2º Semestre/Interface Pessoa-Máquina/Apresentação IPM.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'proposta_de_interface.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "proposta_de_interface.pdf","path": "LEI 3º Ano/2º Semestre/Interface Pessoa-Máquina/proposta_de_interface.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Processamento de Linguagens',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Análise sintática descendente.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Análise sintática descendente.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Análise sintática descendente.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'First & Follow function - solved problems (set 1 & 2).pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "First & Follow function - solved problems (set 1 & 2).pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/First & Follow function - solved problems (set 1 & 2).pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'FIRST() and FOLLOW() functions.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "FIRST() and FOLLOW() functions.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/FIRST() and FOLLOW() functions.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Linguagens - 1 e 2.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Linguagens - 1 e 2.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Linguagens - 1 e 2.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Linguagens - 3 e 4.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Linguagens - 3 e 4.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Linguagens - 3 e 4.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'LL(1) Parsing - Solved Problems (set 1 & 2).pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "LL(1) Parsing - Solved Problems (set 1 & 2).pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/LL(1) Parsing - Solved Problems (set 1 & 2).pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'LL(1) Parsing Table & Parsing.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "LL(1) Parsing Table & Parsing.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/LL(1) Parsing Table & Parsing.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'LR(0) & SLR(1) Automaton & Parsing Table.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "LR(0) & SLR(1) Automaton & Parsing Table.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/LR(0) & SLR(1) Automaton & Parsing Table.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'LR(0) & SLR(1) Parsing.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "LR(0) & SLR(1) Parsing.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/LR(0) & SLR(1) Parsing.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Regex crossword.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Regex crossword.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Regex crossword.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Resolução - Teste PL 2023.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Resolução - Teste PL 2023.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Resolução - Teste PL 2023.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Resolução - Teste PL 2024.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Resolução - Teste PL 2024.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Resolução - Teste PL 2024.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Segurança de Sistemas Informáticos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Guioes',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'guiao2.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao2.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao2.md","content": "<h1>Respostas das Questões</h1> <h2>Q1</h2> <p>Depois de instalada, a biblioteca <code>cryptography</code> foi atualizada com o seguinte comando:</p> <pre class=\"codehilite\"><code class=\"language-bash\">pip install --upgrade cryptography </code></pre>  <p><img alt=\"Alt text\" src=\"g1-1.png\" /></p> <h1>Relatório do Guião da Semana 2</h1>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao3.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao3.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao3.md","content": "<h1>Respostas das Questões</h1> <h2>Q1</h2> <blockquote> <p>Consegue observar diferenças no comportamento dos programas otp.py e bad_otp.py? Se sim, quais?</p> </blockquote> <p>A diferença entre os dois programas está no modo de gerar uma sequência de bytes aleatórios.</p> <p>O <code>otp.py</code> utiliza <code>return os.urandom(n_bytes)</code>, enquanto que o <code>bad_otp.py</code> utiliza <code>random.seed(random.randbytes(2)); random.randbytes(n)</code> &mdash; $2^{16} = 65536$ combinações possíveis. Eventualmente, para um $n$ grande, poderá haver repetições na sequência de bytes gerados.</p> <h2>Q2</h2> <blockquote> <p>O ataque realizado no ponto anterior não entra em contradição com o resultado que estabelece a &ldquo;segurança absoluta&rdquo; da cifra one-time pad? Justifique.</p> </blockquote> <p>Em teoria o OTP é seguro (possui &ldquo;segurança absoluta&rdquo;), no entanto, surgem problemas de segurança quando a geração da chave não é verdadeiramente aleatória.</p> <p>Neste caso, sabendo a seed e método de geração utilizado, é possível, através de um certo número de iterações &mdash; dependente do tamanho da seed &mdash; decifrar a mensagem. Para além disso, também não assegura integrididade.</p> <h1>Relatório do Guião da Semana 3</h1> <h2>Utils</h2> <p>Contém algumas constantes (alfabeto, frequências das letras da língua portuguesa, letra de base para as cifras, etc.), e funções genéricas/ utilizadas por mais do que um ficheiro, como:<br /> - <code>read_file_as_bytes</code>;<br /> - <code>write_bytes_to_file</code>;<br /> - <code>check_words</code> - verifica se uma das palavras da lista está presente num texto;<br /> - <code>calculate_score</code> - Retorna a média dos scores de cada letra;<br /> - <code>preprocess_message</code> - converte letras para maiúsculas, &lsquo;filtra&rsquo; todos os outros caracteres e remove acentos.</p> <h2>César</h2> <p>Nesta cifra, cada letra avança, circularmente, um certo número de vezes no alfabeto. A chave é dada pela letra para qual uma letra <code>BASE</code> avança quando cifrada. (<a href=\"https://cryptii.com/pipes/caesar-cipher\">Website utilizado para verificação</a>).</p> <p>No ataque, tentamos decifrar um texto com todas a letras do alfabeto, e, para cada uma, é dado um score que verifica se as frequências das letras do texto decifrado estão próximas das frequências &ldquo;tabeladas&rdquo; através do cálculo $(\sum_{i=1}^{26} |f_{e} - f_{i}|) / 26$.</p> <p>Também foi feita uma função que tenta encontrar a chave usada para cifrar um texto, caso se saiba da existência de uma palavra nesse texto (não foi pedida no guião).</p> <h2>Vigenère</h2> <p>A lógica é semelhante à utilizada na cifra de César, mas utiliza uma <em>keyword</em>/ sequência de letras em vez de apenas uma letra como chave. Por exemplo, caso <code>len(texto) == 10</code> e <code>len(chave) == 3</code>, as posições 0, 3, 6 e 9 do texto serão cifradas com a letra na posição 0 da chave.</p> <ul> <li><a href=\"https://cryptii.com/pipes/vigenere-cipher\">Verificação</a></li> <li><a href=\"https://youtu.be/rccRQcyKB5g?si=UMLCAKBgeUWRDTfP\">Visualização</a></li> </ul> <p>No ataque, encontra-se uma cifra que minimiza o score do texto decifrado. Para isso, é utilizada a mesma lógica do ataque da cifra de césar, mas por intervalos de posições, <code>cryptogram[idx::key_size]</code> &mdash; tendo em conta que se sabe o tamanho da chave.</p> <h2>OTP</h2> <p>A encriptação OTP requer que a chave tenha comprimento igual ou superior à mensagem de modo a aplicar a operação XOR a cada byte da chave com o byte correspondente da mensagem, <code>[b1 ^ b2 for b1, b2 in zip(key, message)]</code>.</p> <p>O programa <code>bad_otp.py</code> utiliza &ldquo;an INSECURE pseudo-random number generator&rdquo;.</p> <p>No ataque ao <code>bad_otp</code>, são percorridas todas as seeds (65536) até se verificar <code>check_words(result_str, words)</code>. (Caso essas iterações não consigam decifrar, estas serão executadas novamente com um incremento no tamanho da chave &mdash; assume-se que pode ser maior do que o tamanho da mensagem).</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao4.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao4.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao4.md","content": "<h1>Respostas das Questões</h1> <h2>Q2</h2> <blockquote> <p>Qual o impacto de se considerar um <em>NONCE</em> fixo (e.g. tudo 0)? Que implicações terá essa prática na segurança da cifra?</p> </blockquote> <p>Considerar um NONCE fixo, como um valor de todos os bits igual a zero, pode comprometer seriamente a segurança da cifra. Isso pode levar à reutilização do NONCE, vazamento de informações, vulnerabilidade a ataques criptográficos e comprometimento da confidencialidade dos dados cifrados. Isso permite que um atacante aplique um ataque de repetição, onde o mesmo texto cifrado é retransmitido.</p> <h2>Q3</h2> <blockquote> <p>Qual o impacto de utilizar o programa chacha20_int_attck.py nos criptogramas produzidos pelos programas cfich_aes_cbc.py e cfich_aes_ctr.py? Comente/justifique a resposta.</p> </blockquote> <p>O programa <code>chacha20_int_attck.py</code> é projetado para realizar um ataque de integridade em arquivos criptografados usando o algoritmo <code>ChaCha20</code>. Ele explora a propriedade do algoritmo <code>ChaCha20</code> em que o texto cifrado pode ser manipulado sem a necessidade da chave de criptografia, apenas conhecendo parte do texto original e sua posição no arquivo.</p> <p>Os programas <code>cfich_aes_cbc.py</code> e <code>cfich_aes_ctr.py</code>, por outro lado, utilizam os modos de operação <code>CBC (Cipher Block Chaining)</code> e <code>CTR (Counter)</code>, respectivamente, do algoritmo AES para criptografar arquivos. Esses modos de operação têm propriedades diferentes em comparação com o <code>ChaCha20</code>, e o ataque proposto pelo <code>chacha20_int_attck.py</code> não seria aplicável a eles da mesma maneira.</p> <h1>Relatório do Guião da Semana 4</h1> <h2>Utils</h2> <p>Contém algumas constantes (alfabeto, frequências das letras da língua portuguesa, letra de base para as cifras, etc.), e funções genéricas/ utilizadas por mais do que um ficheiro, como:<br /> - <code>read_file_as_bytes</code>;<br /> - <code>write_bytes_to_file</code>;</p> <h2>cfich_chacha20.py</h2> <ul> <li> <p>encrypt_file: Recebe o nome do arquivo, o texto a ser criptografado e a chave de criptografia. Gera um nonce aleatório, inicializa um objeto Cipher com o algoritmo ChaCha20 e o nonce gerado, cifra o texto usando o encryptor do objeto Cipher e escreve o nonce concatenado com o texto cifrado em um novo arquivo com a extensão &ldquo;.enc&rdquo;.</p> </li> <li> <p>decrypt_file: Recebe o nome do arquivo, o texto cifrado e a chave de descriptografia. Extrai o nonce e o texto cifrado do texto fornecido, inicializa um objeto Cipher com o algoritmo ChaCha20 e o nonce extraído, decifra o texto usando o decryptor do objeto Cipher e escreve o texto decifrado em um novo arquivo com a extensão &ldquo;.dec&rdquo;.</p> </li> </ul> <p>A função main determina o modo de operação de acordo com uma das seguintes opções:</p> <ul> <li> <p>No modo &lsquo;setup&rsquo;, gera uma chave de criptografia aleatória e a escreve em um arquivo especificado.</p> </li> <li> <p>No modo &lsquo;enc&rsquo; (criptografia), lê o texto do arquivo e a chave de criptografia de arquivos especificados, e então chama a função encrypt_file.</p> </li> <li> <p>No modo &lsquo;dec&rsquo; (descriptografia), lê o texto cifrado do arquivo e a chave de descriptografia de arquivos especificados, e então chama a função decrypt_file.</p> </li> </ul> <h2>chacha20_int_attck.py</h2> <p>O arquivo criptografado é lido como uma sequência de bytes. A posição em que a alteração será feita é ajustada para levar em conta o comprimento do nonce.</p> <p>Depois, se não existir nenhum erro, calcula a chave utilizada para criptografar o texto original. Isso é feito através de um XOR entre o texto original e o texto cifrado na posição especificada. Como o XOR é reversível, isso nos dá a chave utilizada na cifração.</p> <p>Com a chave calculada, o script realiza um XOR entre o novo texto e a chave para obter o novo texto cifrado.</p> <p>O novo texto cifrado é substituído na posição especificada no arquivo original. O arquivo resultante é então gravado em disco com uma extensão adicional &ldquo;.attck&rdquo; para indicar que foi alvo de um ataque de integridade.</p> <h2>pbenc_chacha20.py</h2> <ul> <li> <p>encrypt_file: Esta função recebe o nome do arquivo, o texto a ser criptografado e a chave de criptografia. Ele gera um nonce aleatório, inicializa um objeto Cipher com o algoritmo ChaCha20 e o nonce fornecido, e então cifra o texto usando o encryptor do objeto Cipher. Por fim, ele escreve o nonce concatenado com o texto cifrado em um novo arquivo com a extensão &ldquo;.enc&rdquo;.</p> </li> <li> <p>decrypt_file: Esta função recebe o nome do arquivo, o texto cifrado e a chave de descriptografia. Ela extrai o nonce e o texto cifrado do texto fornecido, inicializa um objeto Cipher com o algoritmo ChaCha20 e o nonce extraído, e então decifra o texto usando o decryptor do objeto Cipher. Por fim, ele escreve o texto decifrado em um novo arquivo com a extensão &ldquo;.dec&rdquo;.</p> </li> </ul> <p>A função main trata de realizar as seguintes operações:</p> <ul> <li> <p>Para enc (criptografia), ele gera um <em>salt</em> (um valor aleatório usado como entrada para o processo de derivação de chave PBKDF2), cria uma chave derivada da senha usando PBKDF2, cifra o arquivo usando essa chave e escreve o <em>salt</em> e a chave em arquivos separados.</p> </li> <li> <p>Para dec (descriptografia), ele lê o <em>salt</em> do arquivo, gera a chave derivada da senha usando o mesmo processo, verifica se a chave coincide com a chave armazenada anteriormente, e depois decifra o arquivo usando a chave recuperada.</p> </li> </ul>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao5.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao5.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao5.md","content": "<h1>Respostas das Questões</h1> <h2>Q1</h2> <blockquote> <p>Qual o impacto de executar o programa chacha20_int_attck.py sobre um criptograma produzido por pbenc_chacha20_poly1305.py? Justifique.</p> </blockquote> <p>Não é possível atacar com sucesso um criptograma produzido por <code>pbenc_chacha20_poly1305.py</code> com <code>chacha20_int_attck.py</code>, visto que oferece integridade e confidencialidade (combinação de ChaCha20 e <a href=\"https://en.wikipedia.org/wiki/Poly1305\">Poly1305</a>).</p> <p><img alt=\"alt text\" src=\"image-5.png\" /><br /> <img alt=\"alt text\" src=\"image-6.png\" /></p> <h2>Q2</h2> <blockquote> <p>Qual o motivo da sugestão de usar m2 com mais de 16 byte? Será possível contornar essa limitação?</p> </blockquote> <p>Primeiramente, é necessário perceber como funciona o <code>symmetric padding</code> utilizado:</p> <blockquote> <p><a href=\"https://cryptography.io/en/latest/hazmat/primitives/padding/\">PKCS7</a> padding works by appending N bytes with the value of chr(N), where N is the number of bytes required to make the final block of data the same size as the block size. </p> </blockquote> <p>Portanto, o padding é feito com N bytes com o valor <code>char(N)</code>, e não apenas <code>0</code>, o que faz com que a operação XOR entre o padding e a tag seja também significativa.</p> <p>Exemplo de um caso simples:</p> <p><img alt=\"alt text\" src=\"image.png\" /></p> <pre class=\"codehilite\"><code class=\"language-python\">padder = padding.PKCS7(128).padder() padded_m1 = padder.update(m1) + padder.finalize()  padder = padding.PKCS7(128).padder() padded_m2 = padder.update(m2) + padder.finalize()  new_m2 = bytes(x ^ y for x, y in zip(padded_m2[:16], tag1)) + m2[16:]  m3 = padded_m1 + new_m2 </code></pre>  <p>No entanto, desta forma o comprimento de <code>m3</code> aumenta para um múltiplo de 16, o que faz com que a função <code>cbcmac_verify</code> adicione mais 16 bytes de padding, acabando por diferir com <code>m2</code> e portanto resultará em <code>False</code>:</p> <p><img alt=\"alt text\" src=\"image-1.png\" /></p> <p>Caso se impeça que essa adição de padding aconteça, já retornará <code>True</code>.</p> <pre class=\"codehilite\"><code class=\"language-python\">def cbcmac_verify(tag, m_bytes, k):     # padder = padding.PKCS7(128).padder()     # padded_m = padder.update(m_bytes) + padder.finalize()     iv = bytearray(16)     cipher = Cipher(algorithms.AES(k), modes.CBC(iv))     encryptor = cipher.encryptor()     ct = encryptor.update(m_bytes) + encryptor.finalize()     newtag = ct[-16:]     return tag == newtag </code></pre>  <p><img alt=\"alt text\" src=\"image-2.png\" /></p> <p>Apesar disso, reconhecemos que esta não é melhor forma de contornar a limitação - é muito provável que exista uma melhor.</p> <h1>Relatório do Guião da Semana 5</h1> <h2>Ataque CBC-MAC</h2> <p>Lógica utilizada para o ataque ao CBC-MAC:</p> <p><img alt=\"alt text\" src=\"image-3.png\" /></p> <p><img alt=\"alt text\" src=\"image-4.png\" /></p> <p>Primeiramente, é preciso ter um MAC <code>t</code> para uma mensagem <code>m</code>, e um MAC <code>t\'</code> para uma mensagem <code>m\'</code>. Depois, faz-se uma concatenação de <code>m</code> (com padding) com o XOR entre o primeiro bloco de <code>m\'</code> e a tag <code>t</code>, e, finalmente, com o resto de <code>m\'</code>. A tag <code>t\'</code> seŕa válida para o resultado dessa concatenação.</p> <h2>Encrypt-then-MAC</h2> <p>Solicitamos mais bytes à KDF utilizada para derivar a chave:</p> <pre class=\"codehilite\"><code class=\"language-python\">h = hmac.HMAC(key[32:], hashes.SHA256()) ... algorithm = algorithms.AES(key[:32]) </code></pre>  <p>Os primeiros 16 bytes do ciphertext são o nonce, os restantes são o texto encriptado, exceto os últimos 32 que são a <em>signature</em> (verificada pelo HMAC).</p> <p>(O HMAC recebe o nonce e o texto encriptado juntos, mas a cifra AES no modo CTR recebe esses dois separadamente).</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao6.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao6.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao6.md","content": "<h1>Relatório do Guião da Semana 6</h1> <h2>PROG: Client_sec.py e Server_sec.py</h2> <blockquote> <p>Pretende-se modificar os programas fornecidos por forma a protegeram a comunicação entre Cliente/Servidor. Para isso deverá fazer uso de uma cifra autenticada como as utilizadas no último guião (e.g. AES-GCM).</p> </blockquote> <p>O server e o cliente têm de ter conhecimento de uma chave combinada de modo a conseguirem comunicar com mensagens cifradas. Para além disso, têm de enviar também o nonce criado, para além da mensagem cifrada:</p> <pre class=\"codehilite\"><code class=\"language-py\">aesgcm = AESGCM(key) nonce = os.urandom(12) ct = aesgcm.encrypt(nonce, msg, password) writer.write(nonce + ct) </code></pre>  <h2>PROG: Client_dh.py e Server_dh.py</h2> <blockquote> <p>Pretende-se adaptar os programas realizados no ponto anterior para que a chave por eles utilizada resulte da execução do protocolo de acordo de chaves Diffie-Hellman.</p> </blockquote> <p>Para isso, foi necessário alterar os programas de modo a que fosse efetuado um &ldquo;handshake inicial&rdquo; em qua cada um partilha a sua chave pública.<br /> E assim cada um fica com mesma shared key: <code>shared_key = private_key.exchange(peer_public_key)</code>. (p e g são fixos).<br /> O segredo criptográfico utilizado para cifrar e decifrar é derivado a partir dessa shared key <code>key = hkdf.derive(shared_key)</code>.</p> <p>As public keys têm de ser serializadas (para <code>bytes</code>) antes de serem enviadas, e têm de ser deserializadas, quando recebidas, para os tipos de objetos correspondentes. Assim, utilizamos o enconding <code>PEM</code>: <code>pem = public_key.public_bytes( encoding=serialization.Encoding.PEM, ...)</code>, e para deconding utilizamos a função <code>load_pem_public_key(...)</code>.</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao7.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao7.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao7.md","content": "<h1>Respostas das Questões</h1> <h2>Q1</h2> <blockquote> <p>Como pode verificar que as chaves fornecidas nos ficheiros mencionados (por exemplo, em MSG_SERVER.key e MSG_SERVER.crt) constituem de facto um par de chaves RSA válido?</p> </blockquote> <p>Contéudo:<br /> - <code>openssl rsa -text -noout -in MSG_SERVER.key</code> com a password &lsquo;1234&rsquo;</p> <p><img alt=\"alt text\" src=\"s7image-1.png\" /></p> <ul> <li><code>openssl x509 -text -noout -in MSG_SERVER.crt</code></li> </ul> <p><img alt=\"alt text\" src=\"s7image.png\" /></p> <p>Para verificar que um par de chaves RSA é válido (<em>private key matches with public key in the certificate</em>), é preciso comparar o <em>modulus</em> da chave pública no certificado com o da chave privada.</p> <p><code>openssl rsa -modulus -noout -in MSG_SERVER.key | openssl md5</code><br /> <img alt=\"alt text\" src=\"s7image-2.png\" /></p> <p>Verificar consistência e validade da chave privada:<br /> <code>openssl rsa -check -noout -in MSG_SERVER.key</code><br /> <img alt=\"alt text\" src=\"s7image-3.png\" /></p> <p><code>openssl x509 -modulus -noout -in MSG_SERVER.crt | openssl md5</code><br /> <img alt=\"alt text\" src=\"s7image-4.png\" /></p> <p>Ou:</p> <pre class=\"codehilite\"><code class=\"language-bash\">openssl x509 -noout -modulus -in MSG_SERVER.crt &gt; crt-mod.txt openssl rsa -noout -modulus -in MSG_SERVER.key &gt; key-mod.txt diff3 crt-mod.txt key-mod.txt </code></pre>  <h2>Q2</h2> <blockquote> <p>Visualize o conteúdo dos certificados fornecidos, e refira quais dos campos lhe parecem que devam ser objecto de atenção no procedimento de verificação.</p> </blockquote> <p><img alt=\"alt text\" src=\"s7image-5.png\" /></p> <h1>Relatório do Guião da Semana 7</h1> <p><img alt=\"alt text\" src=\"s7image-6.png\" /></p> <p>Notes:<br /> - Pode-se confiar na chave pública do Server, por exemplo, pois esta está no certificado enviado que é comprovado por uma <em>trusted third party</em>, CA.<br /> - Caso, por exemplo, a chave pública do servidor (DL) for modificada no caminho, esta não será igual à que está na assinatura e, portanto, não será possível validar a assinatura.<br /> - Assim, para além de um <em>intruder</em> nunca conseguir saber qual é a chave partilhada, também não conseguirá realizar ataques de man-in-the-middle.</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'TPs',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'SSI - TP1 - G21 - Relatório.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "SSI - TP1 - G21 - Relatório.pdf","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/TPs/SSI - TP1 - G21 - Relatório.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: 'GitHub Links.md',
                icon: 'pi pi-file',
                command: () => {tabs.value.push({"type": "markdown","label": "GitHub Links.md","path": "LEI 3º Ano/GitHub Links.md","content": "<h1>3º ano</h1> <h2>1º semestre</h2> <ul> <li>Cálculo de Programas<ul> <li><a href=\"https://github.com/rodrigo72/CP-exercicios\">Teoria e exercícios</a></li> </ul> </li> <li>Comunicações por Computador<ul> <li><a href=\"https://github.com/rodrigo72/CC/tree/main/Teoria\">Teoria</a></li> <li><a href=\"https://github.com/rodrigo72/CC\">Trabalhos práticos</a></li> </ul> </li> <li>Desenvolvimento de Sistemas de Software<ul> <li><a href=\"https://github.com/rodrigo72/DSS-exercicios\">Teoria e exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/DSS\">Projeto</a></li> </ul> </li> <li>Inteligência Artificial<ul> <li><a href=\"https://github.com/rodrigo72/IA-exercicios\">Exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/IA\">Projeto</a></li> </ul> </li> <li>Laboratórios de Informática IV<ul> <li><a href=\"https://github.com/rodrigo72/LI4\">ASP.NET Web App</a></li> </ul> </li> <li>Sistemas Distribuídos<ul> <li><a href=\"https://github.com/rodrigo72/SD-exercicios\">Guiões</a></li> <li><a href=\"https://github.com/rodrigo72/SD\">Cloud Computing</a></li> </ul> </li> </ul> <h2>2º semestre</h2> <ul> <li>Processamento de Linguagens <ul> <li><a href=\"https://github.com/rodrigo72/PL2024\">TPCs</a></li> <li><a href=\"https://github.com/rodrigo72/PL-Project\">Forth Compiler</a></li> </ul> </li> <li>Computação Gráfica<ul> <li><a href=\"https://github.com/rodrigo72/CG-exercicios\">Exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/CG\">3D Rendering Engine</a></li> </ul> </li> <li>Aprendizagem e Decisão Inteligentes<ul> <li><a href=\"https://github.com/rodrigo72/ADI-exercicios\">Fichas</a></li> <li><a href=\"https://github.com/rodrigo72/ADI\">Projeto KNIME</a></li> </ul> </li> <li>Interface Pessoa-Máquina<ul> <li><a href=\"https://github.com/rodrigo72/IPM-exercicios\">Fichas</a></li> <li><a href=\"https://github.com/rodrigo72/IPM\">Vue.js website</a></li> </ul> </li> <li>Análise de Projetos<ul> <li><a href=\"https://github.com/rodrigo72/AP\">TP</a></li> </ul> </li> <li>Segurança de Sistemas Informáticos<ul> <li><a href=\"https://github.com/rodrigo72/SSI-guioes\">Guiões</a></li> <li><a href=\"https://github.com/rodrigo72/SSI-TPs\">TPs</a></li> </ul> </li> </ul>"});currentTab.value = tabs.value.length - 1;},
              },
            ],
          },
          {
            label: 'Other',
            icon: 'pi pi-folder',
            items: [
              {
                label: 'Blender',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Bicycle - Ghibli.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "Bicycle - Ghibli.pdf","path": "Other/Blender/Bicycle - Ghibli.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                  {
                    label: 'Blender 3.0 Shortcuts v1.2.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "Blender 3.0 Shortcuts v1.2.pdf","path": "Other/Blender/Blender 3.0 Shortcuts v1.2.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                  {
                    label: 'City - OSM.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "City - OSM.pdf","path": "Other/Blender/City - OSM.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                  {
                    label: 'Donut.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "Donut.pdf","path": "Other/Blender/Donut.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                  {
                    label: 'Ghibli Trees.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "Ghibli Trees.pdf","path": "Other/Blender/Ghibli Trees.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                  {
                    label: 'Objeto estranho.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "Objeto estranho.pdf","path": "Other/Blender/Objeto estranho.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                  {
                    label: 'Section 1.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "Section 1.pdf","path": "Other/Blender/Section 1.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                  {
                    label: 'Section 2.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "Section 2.pdf","path": "Other/Blender/Section 2.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                  {
                    label: 'Solenoide - Hard Surface Modeling.pdf',
                    icon: 'pi pi-file-pdf',
                    command: () => {tabs.value.push({"type": "pdf","label": "Solenoide - Hard Surface Modeling.pdf","path": "Other/Blender/Solenoide - Hard Surface Modeling.pdf"});currentTab.value = tabs.value.length - 1;},
                  },
                ],
              },
              {
                label: 'Books',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Highlights & Notes',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'How to Take Smart Notes.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "How to Take Smart Notes.md","path": "Other/Books/Highlights & Notes/How to Take Smart Notes.md","content": "<h1>Highlights</h1> <blockquote> <p>Writing is not what follows research, learning or studying, it is the medium of all this work.</p> <p>The quality of a paper and the ease with which it is written depends more than anything on what you have done in writing before you even made a decision on the topic.</p> <p>It is not so important who you are, but what you do.</p> <p>Nobody needs willpower not to eat a chocolate bar when there isn&rsquo;t one around. And nobody needs willpower to do something they wanted to do anyway. Every task that is interesting, meaningful and well-defined will be done, because there is no conflict between long- and short-term interests. Having a meaningful and well-defined task beats willpower every time. Not <em>having to use</em> willpower indicates that you set yourself up for success. This is where the organization of writing and note-taking comes into play.</p> <p>&ldquo;I never force myself to do anything I don&rsquo;t feel like. Whenever I am stuck, I do something else.&rdquo; A good structure allows you to do that, to move seamlessly from one task to another.</p> <p>If you can trust the system, you can let go of the attempt to hold everything together in your head and you start focusing on what is important.</p> <p>A good structure enables flow, the state in which you get so completly immersed in your work that you lose track of time and can just keep on going as the work becomes effortless.</p> <p>Having a clear structure to work in is completely different from making plans about something. If you make a plan, you impose a structure on yourself; it makes you inflexible. To keep going according to plan, you have to push yourself and employ willpower. This is not only demotivating, but also unsuitable for an open-ended process like research, thinking or studying in general, where we have to adjust our next steps with every new insight, understanding or achievement.</p> <p>Studies on highly succesful people have proven again and again that success is not the result of strong willpower and the ability to overcome resistance, but rather the result of smart working environments that avoid resistance in the first place.</p> <p>Assemble notes and bring them into order, turn these notes into a draft, review it and you are done.</p> <p>Writing these notes is also not the main work. Thinking is. Reading is. Understanding and coming up with ideas is. And this is how it is supposed to be. The notes are just the tangible outcome of it.</p> <p>If there is one thing the experts agree on, then it is this: You have to externalise your ideas, you have to wrtite.</p> <p>Feedback loops are not only crucial to for the dynamics of motivation, but also the key element to any learning process. Nothing motivates us more than the experience of becoming better at what we do. And the only chance to improve in something is getting timely and concrete feedback.</p> <p>The key to creativity is being able to switch between a wide-opne, playful mind and a narrow analytical frame</p> <p>Verbatim notes can be taken with almost no thinking</p> <p>Reading, especially rereading, can easily fool us into believing we understand a text.</p> <p>What good readers can do is spot the limitations of a particular approach and see what what is not mentioned in the text.</p> <p>To be able to play with ideas, we first have to liberate them from their original context by means of abstraction and re-specification</p> <p>Without structure, we cannot differentiate, compare or experiment with ideas.</p> <p>&ldquo;What is interesting about this?&rdquo; and &ldquo;What is so relevant about this that it is worth noting down.</p> <p>Civilization advances by extending the number of important operations which we can perform without thinking about them.</p> <p>When we perform an action repeatedly, its familiarity seems to bleed back into our judgments about that behavior. We end up feeling we have more control over precisely the behaviors that, in reality, we have least control over</p> </blockquote>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Kokoro.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Kokoro.md","path": "Other/Books/Highlights & Notes/Kokoro.md","content": "<h1>Highlights</h1> <h2>Introduction</h2> <p>Such rapid change inevitably comes at a psychological cost, and this is what Sōseki acutely documented in his finest novels</p> <p>Sōseki increasingly sought to portray for his readers not only the upheavals of their rapidly changing world but the dilemmas and suffering of the contemporary psyche.</p> <h2>CHAPTER 4</h2> <blockquote> <p><strong>I pity him now, for I realize that he was in fact sending a warning, to someone who was attempting to grow close to him, signaling that he was unworthy of such intimacy. For all his unresponsiveness to others’ affection, I now see, it was not them he despised but himself.</strong></p> </blockquote> <h2>CHAPTER 14</h2> <p>“You mustn’t be so hot-headed,” Sensei warned me.“On the contrary, being coolheaded is what’s led me to draw these conclusions,” I replied confidently.Sensei would not accept that. “You’re being carried along by passion. Once the fever passes, you’ll feel disillusioned. All this admiration is distressing enough, heaven knows, but it’s even more painful to foresee the change that will take place in you sooner or later.”</p> <h2>CHAPTER 16</h2> <p>“I don’t like argumentation. You men do it a lot, don’t you? You seem to enjoy it. I’m always amazed at how men can go on and on, happily passing around the empty cup of some futile discussion.</p> <h2>CHAPTER 28</h2> <p>But do you imagine there’s a certain type of person in the world who conforms to the idea of a ‘bad person’? You’ll never find someone who fits that mold neatly, you know. On the whole, all people are good, or at least they’re normal. The frightening thing is that they can suddenly turn bad when it comes to the crunch. That’s why you have to be careful.”</p> <h2>CHAPTER 32</h2> <p>Lying there, I reviewed my past and imagined my future. This diploma stood like a boundary marker between the one and the other. It was a strange document indeed, I decided, both significant and meaningless.</p> <h2>CHAPTER 33</h2> <p>“Well, it’s not really a question of how much, you know . . . I mean, we get by, one way and another . . . Anyway, that’s beside the point. The point is, you really must find something to do in life. You can’t just laze around like Sensei does . . .”Sensei turned slightly. “I don’t just laze around,” he protested.</p> <h2>CHAPTER 36</h2> <p>I wrote those words simply as they occurred to me, but once they were out, I found myself feeling rather different.In the train I pondered these contradictions, and I soon began to see myself as superficial and emotionally irresponsible. </p> <h2>CHAPTER 37</h2> <p>“You must realize how it pleases me that this son of mine, whom I raised with such love and care, should graduate while I’m still alive and well to witness it. Having someone make such a fuss about a mere graduation must seem boring to you, with all your aspirations—I can see that. But stand in my shoes, and you’ll see it a bit differently. What I’m saying is, it’s a fine thing for me, if not for you, don’t you see?”</p> <h2>CHAPTER 41</h2> <p>I would receive no reply. I was lonely. This was why I wrote letters: I hoped for a response.</p> <h2>CHAPTER 43</h2> <p>Giving your children an education has its good and bad points, I must say. You go to the trouble of training them, and then they don’t come home again. It seems to me an education is the easy way to split up a family.</p> <h2>CHAPTER 62</h2> <p>But I believe that a commonplace idea stated with passionate conviction carries more living truth than some novel observation expressed with cool indifference.</p> <h2>CHAPTER 66</h2> <p>At times I felt a suffocating pressure, as if I had swallowed lead. Yet at the same time every nerve was on edge.</p> <h2>CHAPTER 79</h2> <p>I pointed out that if we two men were to go on talking exclusively to each other forever, we would simply continue in the same straight line</p> <h2>CHAPTER 90</h2> <p>So my pain was now mixed with a kind of terror—the beginnings of a horrified recognition that he was stronger than I.</p> <h2>CHAPTER 91</h2> <p>I knew how strong he was, and how intensely earnest. I was convinced that there was a lot more I needed to know before I could decide on my own attitude. On the other hand, the thought of having anything more to do with him was strangely repugnant.</p> <h2>CHAPTER 106</h2> <blockquote> <p><strong>I suddenly understood that I was no different from my uncle, and the knowledge made me reel. What could I do? Others were already repulsive to me, and now I was repulsive even to myself.</strong></p> </blockquote>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Lonely Castle In The Mirror.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Lonely Castle In The Mirror.md","path": "Other/Books/Highlights & Notes/Lonely Castle In The Mirror.md","content": "<h1>Quotes</h1> <blockquote> <p>Now with their so-called caretaker, the Wolf Queen, absent, no one urged anyone to add any extra detail</p> <p>They&rsquo;d shared names, but that was it. No one had really said anything about who they were, or where they were from.</p> <p>She found she had no problem being with the others again, and wondered why she&rsquo;d been so bothered about it before.</p> <p>Kokoro hopelessly realized now that if she put the incident into words, it would boil down to something so lame.</p> <p>her relief outweighted the regret</p> <p>She could go anywhere. It wasn&rsquo;t as if it was always going to be easy. There&rsquo;d always be people she disliked. That reality wasn&rsquo;t going to go away.</p> <p>More than a few times her iron will spurred Akiko on, made her feel she was the one being rescued.</p> </blockquote>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Man\'s Search for Meaning.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Man\'s Search for Meaning.md","path": "Other/Books/Highlights & Notes/Man's Search for Meaning.md","content": "<blockquote> <p>Emotion which is suffering ceases to be suffering as soon as we form a clear and precise picture of it.</p> <p>We would give our freedom up for the chance of being special. (context: Nazi guards)<br /> - pleasure of membership<br /> - the creeping thrill of exclusion <br /> - comfort of discipline and rules<br /> Most of the SS members were neither perverted nor sadistic but rather terribly, terrifyingly normal.</p> </blockquote>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Meditations.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Meditations.md","path": "Other/Books/Highlights & Notes/Meditations.md","content": "<h2>Book I</h2> <p>astray to sophistic emulation</p> <h2>Book II</h2> <p>Begin the morning by saying to thyself, I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial</p> <p>I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.</p> <p>no longer either be dissatisfied with thy present lot, or shrink from the future.</p> <p>Through not observing what is in the mind of another a man has seldom been seen to be unhappy; but those who do not observe the movements of their own minds must of necessity be unhappy.</p> <p>Give thyself time to learn something new and good, and cease to be whirled around. But then thou must also avoid being carried about the other way. For those too are triflers who have wearied themselves in life by their activity, and yet have no object to which to direct every movement, and, in a word, all their thoughts.</p> <p>the offences which are committed through desire are more blameable than those which are committed through anger</p> <p>But death certainly, and life, honour and dishonour, pain and pleasure, all these things equally happen to good men and bad, being things which make us neither better nor worse. Therefore they are neither good nor evil.</p> <p>Though thou shouldst be going to live three thousand years, and as many times ten thousand years, still remember that no man loses any other life than this which he now</p> <p>lives, nor lives any other than this which he now loses.</p> <p>For to be vexed at anything which happens is a separation of ourselves from nature</p> <p>For the present is the only thing of which a man can be deprived</p> <p>In the third place, the soul does violence to itself when it is overpowered by pleasure or by pain</p> <p>. In the next place, the soul does violence to itself when it turns away from any man</p> <p>does anything thoughtlessly and without considering what it is, </p> <p>Fourthly, when it plays a part, and does or says anything insincerely and untruly</p> <p>Of human life the time is a point, and the substance is in a flux, and the perception dull, and the composition of the whole body subject to putrefaction, and the soul a whirl, and fortune hard to divine, and fame a thing devoid of judgement</p> <h2>Book III</h2> <p>it is quite uncertain whether the understanding will still continue sufficient for the comprehension of things</p> <p>We must make haste then, not only because we are daily nearer to death, but also because the conception of things and the understanding of them cease first.</p> <p>And so he will see even the real gaping jaws of wild beasts with no less pleasure than those which painters and sculptors show by imitation</p> <p>, because they are consequent upon the things which are formed by nature, help to adorn them, and they please the mind;</p> <p>accepting with all his soul everything which happens and is assigned to him as his portion; and not often, nor yet without great necessity and for the general interest, imagining what another says, or does, or thinks. For it is only what belongs to himself that he makes the matter for his activity</p> <p>A man then must stand erect, not be kept erect by others.</p> <p>simply and freely choose the better, and hold to it.</p> <p>worship of its excellence</p> <p>Never value anything as profitable to thyself which shall compel thee to break thy promise, to lose thy self-respect, to hate any man, to suspect, to curse, to act the hypocrite</p> <p>acts no tragic part, does not groan, will not need either solitude or much company;</p> <p>In the mind of one who is chastened and purified thou wilt find no corrupt matter, nor impurity, nor any sore skinned over</p> <p>If thou workest at that which is before thee, following right reason seriously, vigorously, calmly, without allowing anything else to distract thee, but keeping thy divine part pure, as if thou shouldst be bound to give it back immediately; if thou holdest to this, expecting nothing, fearing nothing, but satisfied with thy present activity according to nature, and with heroic truth in every word and sound which thou utterest, thou wilt live happy. And there is no man who is able to prevent this.</p>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Notes from Underground.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Notes from Underground.md","path": "Other/Books/Highlights & Notes/Notes from Underground.md","content": "<h1>Introduction</h1> <blockquote> <p>What we see is a man glancing at us out of the corner of his eye, very much aware of us as he speaks, very much concerned with the impression his words are making.</p> <p>The underground man&rsquo;s book is a personal outpouring – harsh, self-accusatory, defiant, negligently written, loosely structured – a long diatribe, followed by some avowedly random recollections (“I will not introduce any order or system. Whatever I recall, I will write down.”) It claims to be genuine, if artistically crude.</p> </blockquote> <h1>Part One: Underground</h1> <blockquote> <p>Not just wicked, no, I never even managed to become anything: neither wicked nor good, neither a scoundrel nor an honest man, neither a hero nor an insect. And now I am living out my life in my corner, taunting myself with the spiteful and utterly futile consolation that it is even impossible for an intelligent man seriously to become anything, and only fools become something.</p> <p>But, gentlemen, who can take pride in his sicknesses, and swagger about them besides?Though – what am I saying? – everyone does it; it&rsquo;s their sicknesses that everyone takes pride in, and I, perhaps, more than anyone. Let us not argue; my objection was absurd. But all the same I am strongly convinced that not only too much consciousness but even any consciousness at all is a sickness. I stand upon it.</p> <p>myself with my teeth, inwardly, secretly, tear and suck at myself until the bitterness finally turned into some shameful, accursed sweetness, and finally – into a decided, serious pleasure! Yes, a pleasure, a pleasure! I stand upon it.</p> <p>that even if you had enough time and faith left to change yourself into something different, you probably would not wish to change; and even if you did wish it, you would still not do anything, because in fact there is perhaps nothing to change into. </p> <p>So it turns out, for example, as a result of heightened consciousness: right, you&rsquo;re a scoundrel – as if it were a consolation for the scoundrel himself to feel that he is indeed a scoundrel.</p> <p>I repeat, I emphatically repeat: ingenuous people and active figures are all active simply because they are dull and narrow-minded. How to explain it? Here&rsquo;s how: as a consequence of their narrow-mindedness, they take the most immediate and secondary causes for the primary ones, and thus become convinced more quickly and easily than others that they have found an indisputable basis for their doings, and so they feel at ease; and that, after all, is the main thing. For in order to begin to act, one must first be completely at ease, so that no more doubts remain. Well, and how am I, for example, to set myself at ease? Where are the primary causes on which I can rest, where are my bases? Where am I going to get them? I exercise thinking, and, consequently, for me every primary cause immediately drags with it yet another, still more primary one, and so on ad infinitum.</p> <p>Man loves creating and the making of roads, that is indisputable. But why does he so passionately love destruction and chaos as well? Tell me that! But of this I wish specially to say a couple of words myself. Can it be that he has such a love of destruction and chaos (it&rsquo;s indisputable that he sometimes loves them very much; that is a fact) because he is instinctively afraid of achieving the goal and completing the edifice he is creating? How do you know, maybe he likes the edifice only from far off, and by no means up close;</p> <p>For he senses that once he finds it, there will be nothing to search for. Workers, when they&rsquo;re done working, at least get their pay, go to a pot-house, then wind up with the police – so it keeps them busy for a week. But where is man to go? Something awkward, at any rate, can be noticed in him each time he achieves some such goal. Achieving he likes, but having achieved he does not quite like, and that, of course, is terribly funny. In short, man is comically arranged; there is apparently a joke in all this. But still, two times two is four is a most obnoxious thing. Two times two is four – why, in my opinion, it&rsquo;s sheer impudence, sirs. Two times two is four has a cocky look; it stands across your path, arms akimbo, and spits. I agree that two times two is four is an excellent thing; but if we&rsquo;re going to start praising everything, then two times two is five is sometimes also a most charming little thing.</p> <p>Now look: if instead of a palace there is a chicken coop, and it starts to rain, I will perhaps get into the chicken coop to avoid a wetting, but all the same I will not take the chicken coop for a palace out of gratitude for its having kept me from the rain. You laugh, you even say that in that case it makes no difference – chicken coop or mansion. Yes, say I, if one were to live only so as not to get wet. <strong>But what&rsquo;s to be done if I&rsquo;ve taken it into my head that one does not live only for that, and that if one is to live, it had better be in a mansion? This is my wanting, this is my desire. You will scrape it out of me only when you change my desires. So, change them, seduce me with something else, give me a different ideal. But meanwhile I will not take a chicken coop for a palace.</strong> Let it even be so that the crystal edifice is a bluff, that by the laws of nature it should not even be, and that I&rsquo;ve invented it only as a result of my own stupidity, as a result of certain old nonrational habits of our generation. But what do I care if it should not be? What difference does it make, since it exists in my desires, or, better, exists as long as my desires exist?</p> </blockquote> <h1>Part Two: Apropos of the Wet Snow</h1> <blockquote> <p>When from out of error&rsquo;s darkness<br /> With a word both sure and ardent<br /> I had drawn the fallen soul,<br /> And you, filled with deepest torment,<br /> Cursed the vice that had ensnared you<br /> And so doing wrung your hands;<br /> When, punishing with recollection<br /> Forgetful conscience, you then told<br /> The tale of all that went before me,<br /> And suddenly you hid your face<br /> In trembling hands and, filled with horror,<br /> Filled with shame, dissolved in tears, <br /> Indignant as you were, and shaken . . . Etc., etc., etc.</p> </blockquote>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'On Writing.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "On Writing.md","path": "Other/Books/Highlights & Notes/On Writing.md","content": "<h2>Chapter 1</h2> <p>I don’t believe writers can be made, either by circumstances or by self-will (although I did believe those things once)</p> <p>(Uncle Oren, to whom the Evil Cinderblock surely belonged, is almost twenty years dead),</p> <p>Since the repeated eardrum-lancings when I was six, one of my life’s firmest principles has been this: Fool me once, shame on you. Fool me twice, shame on me. Fool me three times, shame on both of us</p> <p>and The Nagging Problem of Ruth would be solved</p> <p>“This is good. Not for us, but good. You have talent. Submit again.”</p> <pre class=\"codehilite\"><code>Those four brief sentences, scribbled by a fountain pen that left big ragged blotches in its wake, brightened the dismal winter of my sixteenth year. </code></pre>  <p>If you write (or paint or dance or sculpt or sing, I suppose), someone will try to make you feel lousy about it, that’s all</p> <p>When you write a story, you’re telling yourself the story,” he said. “When you rewrite, your main job is taking out all the things that are not the story.”</p> <p>Gould said something else that was interesting on the day I turned in my first two pieces: write with the door closed, rewrite with the door open. Your stuff starts out being just for you, in other words, but then it goes out.</p> <p>Writing is a lonely job. Having someone who believes in you makes a lot of difference. They don’t have to make speeches. Just believing is usually enough.</p> <p>The most important is that the writer’s original perception of a character or characters may be as erroneous as the reader’s. Running a close second was the realization that stopping a piece of work just because it’s hard, either emotionally or imaginatively, is a bad idea.</p> <p>I took her by the shoulders. I told her about the paperback sale. She didn’t appear to understand. I told her again. Tabby looked over my shoulder at our shitty little four-room apartment, just as I had, and began to cry.</p> <p>The idea that creative endeavor and mind-altering substances are entwined is one of the great pop-intellectual myths of our time.</p> <p>It starts with this: put your desk in the corner, and every time you sit down there to write, remind yourself why it isn’t in the middle of the room. Life isn’t a support-system for art. It’s the other way around.</p> <h2>Chapter 2 What Writing Is</h2> <p>It’s easy to become careless when making rough comparisons, but the alternative is a prissy attention to detail that takes all the fun out of writing. What am I going to say, “on the table is a cage three feet, six inches in length, two feet in width, and fourteen inches high”? That’s not prose, that’s an instruction manual. </p> <p>I’m not asking you to come reverently or unquestioningly; I’m not asking you to be politically correct or cast aside your sense of humor (please God you have one). This isn’t a popularity contest, it’s not the moral Olympics, and it’s not church. But it’s writing,</p> <p>Let me say it again: you must not come lightly to the blank page.</p> <h2>Chapter 3 Toolbox</h2> <p>I want to suggest that to write to your best abilities, it behooves you to construct your own toolbox and then build up enough muscle so you can carry it with you. Then, instead of looking at a hard job and getting discouraged, you will perhaps seize the correct tool and get immediately to work.</p> <p>One of the really bad things you can do</p> <p>Put your vocabulary on the top shelf of your toolbox, and don’t make any conscious effort to improve it. (You’ll be doing that as you read, of course … but that comes later</p> <p>to your writing is to dress up the vocabulary, looking for long words because you’re maybe a little bit ashamed of your short ones. This is like dressing up a household pet in evening clothes</p> <p>use the first word that comes to your mind, if it is appropriate</p> <p>The word is only a representation of the meaning; even at its best, writing almost always falls short of full meaning. Given that, why in God’s name would you want to make things worse by choosing a word which is only cousin to the one you really wanted to use?</p> <p>and colorful. If you hesitate and cogitate, you will come up with another word—of course you will, there’s always another word—but it probably won’t be as good as your first one, or as close to what you really mean</p> <p>Vocabulary used in speech or writing organizes itself in seven parts of speech (eight, if you count interjections such as Oh! and Gosh! and Fuhgeddaboudit!).</p> <p>Warriner’s English Grammar and Composition—</p> <p>He hated phrases such as “the fact that” and “along these lines.”</p> <pre class=\"codehilite\"><code>I have my own dislikes—I believe that anyone using the phrase “That’s so cool” should have to stand in the corner and that those using the far more odious phrases “at this point in time” and “at the end of the day” should be sent to bed without supper (or writing-paper, for that matter). </code></pre>  <p>The meeting will be held at seven o’clock</p> <p>The meeting’s at seven</p> <p>You might also notice how much simpler the thought is to understand when it’s broken up into two thoughts</p> <p>My first kiss will always be recalled by me as how my romance with Shayna was begun. Oh, man—who farted, right? A simpler way to express this idea—sweeter and more forceful, as well—might be this: My romance with Shayna began with our first kiss. I’ll never forget it. I’m not in love with this because it uses with twice in four words, but at least we’re out of that awful passive voice.</p> <p>Consider the sentence He closed the door firmly. It’s by no means a terrible sentence</p> <p>but ask yourself if firmly really has to be there. You can argue that it expresses a degree of difference between He closed the door and He slammed the door, and you’ll get no argument from me … but what about context? What about all the enlightening (not to say emotionally moving) prose which came before He closed the door firmly? Shouldn’t this tell us how he closed the door? </p> <p>the foregoing prose does tell us, isn’t firmly an extra word? Isn’t it redundant?</p> <p>Someone out there is now accusing me of being tiresome and anal-retentive. I deny it. I believe the road to hell is paved with adverbs, and I will shout it from the rooftops. To put it another way, they’re like dandelions. If you have one on your lawn, it looks pretty and unique. If you fail to root it out, however, you find five the next day … fifty the day after that … and then, my brothers and sisters, your lawn is totally, completely, and profligately covered with dandelions. By then you see them for the weeds they really are, but by then it’s—GASP!!—too late. </p> <p>Larry McMurtry, the Shane of dialogue attribution</p> <p>Some writers try to evade the no-adverb rule by shooting the attribution verb full of steroids. The result is familiar to any reader of pulp fiction or paperback originals:</p> <pre class=\"codehilite\"><code>“Put down the gun, Utterson!” Jekyll grated.  “Never stop kissing me!” Shayna gasped.  “You damned tease!” Bill jerked out.  Don’t do these things. Please oh please </code></pre>  <p>When I do it, it’s usually for the same reason any writer does it: because I am afraid the reader won’t understand me if I don’t.</p> <p>You probably do know what you’re talking about, and can safely energize your prose with active verbs. And you probably have told your story well enough to believe that when you use he said, the reader will know how he said it—fast or slowly, happily or sadly. Your man may be floundering in a swamp, and by all means throw him a rope if he is … but there’s no need to knock him unconscious with ninety feet of steel cable.</p> <p>A series of grammatically proper sentences can stiffen that line, make it less pliable. </p> <p>The other uses of this paragraph include stage direction, minor but useful enhancement of character and setting, and a vital moment of transition</p> <h2>Chapter 4 On Writing</h2> <p>I am approaching the heart of this book with two theses, both simple. The first is that good writing consists of mastering the fundamentals (vocabulary, grammar, the elements of style) and then filling the third level of your toolbox with the right instruments. The second is that while it is impossible to make a competent writer out of a bad writer, and while it is equally impossible to make a great writer out of a good one, it is possible, with lots of hard work, dedication, and timely help, to make a good writer out of a merely competent one.</p> <p>There is a muse,* but he’s not going to come fluttering down into your writing room and scatter creative fairy-dust all over your typewriter or computer station. He lives in the ground.</p> <p>If you want to be a writer, you must do two things above all others: read a lot and write a lot</p> <p>I wrote stories in my teenage years where all these styles merged, creating a kind of hilarious stew. This sort of stylistic blending is a necessary part of developing one’s own style, but it doesn’t occur in a vacuum. </p> <p>Talent renders the whole idea of rehearsal meaningless; when you find something at which you are talented, you do it (whatever it is) until your fingers bleed or your eyes are ready to fall out of your head. Even when no one is listening (or reading, or watching), every</p> <p>outing is a bravura performance, because you as the creator are happy. Perhaps even ecstatic. That goes for reading and writing as well as for playing a musical instrument, hitting a baseball, or running the four-forty. The sort of strenuous reading and writing program I advocate—four to six hours a day, every day—will not seem strenuous if you really enjoy doing these things and have an aptitude for them; in fact, you may be following such a program already. If you feel you need permission to do all the reading and writing your little heart desires, however, consider it hereby granted by yours truly.</p> <p>The more you read, the less apt you are to make a fool of yourself with your pen or word processor.</p> <p>Basically, mornings are my prime writing time.</p> <p>By the time you step into your new writing space and close the door, you should have settled on a daily writing goal. As with physical exercise, it would be best to set this goal low at first, to avoid discouragement. I suggest a thousand words a day,</p> <p>I’ll also suggest that you can take one day a week off, at least to begin with</p> <p>With that goal set, resolve to yourself that the door stays closed until that goal is met. </p> <p>For any writer, but for the beginning writer in particular, it’s wise to eliminate every possible distraction</p> <p>Don’t wait for the muse. As I’ve said, he’s a hardheaded guy who’s not susceptible to a lot of creative fluttering. This isn’t the Ouija board or the spirit-world we’re talking about here, but just another job like laying pipe or driving long-haul trucks. Your job is to make sure the muse knows where you’re going to be every day from nine ’til noon or seven ’til three. If he does know, I assure you that sooner or later he’ll start showing up, chomping his cigar and making his magic.</p> <p>Stylistic imitation is one thing, a perfectly honorable way to get started as a writer</p> <p>Write what you like, then imbue it with life and make it unique by blending in your own personal knowledge of life, friendship, relationships, sex, and work. Especially work. People love to read about work. God knows why,</p> <p>In my view, stories and novels consist of three parts: narration, which moves the story from point A to point B and finally to point Z; description, which creates a sensory reality for the reader; and dialogue, which brings characters to life through their speech.</p> <p>John Grisham, of course, knows lawyers. What you know makes you unique in some other way. Be brave. Map the enemy’s positions, come back, tell us all you know. And remember that plumbers in space is not such a bad setup for a story.</p> <p>I believe plotting and the spontaneity of real creation aren’t compatible. It’s best that I be as clear about this as I can—I want you to understand that my basic belief about the making of stories is that they pretty much make themselves.</p> <p>It’s clumsy, mechanical, anticreative. Plot is, I think, the good writer’s last resort and the dullard’s first choice. The story which results from it is apt to feel artificial and labored.</p> <p>Here we go</p> <p>Description is what makes the reader a sensory participant in the story</p> <p>Thin description leaves the reader feeling bewildered and nearsighted. Overdescription buries him or her in details and images. The trick is to find a happy medium. It’s also important to know what to describe and what can be left alone while you get on with your main job, which is telling a story.</p> <p>We all remember one or more high school losers, after all; if I describe mine, it freezes out yours, and I lose a little bit of the bond of understanding I want to forge between us. Description begins in the writer’s imagination, but should finish in the reader’s. </p> <p>The key to good description begins with clear seeing and ends with clear writing, the kind of writing that employs fresh images and simple vocabulary</p> <p>It’s dialogue that gives your cast their voices, and is crucial in defining their characters—only what people do tells us more about what they’re like, and talk is sneaky: what people say often conveys their character to others in ways of which they—the speakers—are completely unaware.</p> <p>one of the cardinal rules of good fiction is never tell us a thing if you can show us, instead</p> <p>particularly listening, picking up the accents, rhythms, dialect, and slang of various groups. Loners such as Lovecraft often write it badly, or with the care of someone who is composing in a language other than his or her native tongue.</p> <p>As with all other aspects of fiction, the key to writing good dialogue is honesty</p> <p>The point is to let each character speak freely, without regard to what the Legion of Decency or the Christian Ladies’ Reading Circle may</p> <p>in real life we each of us regard ourselves as the main character, the protagonist, the big cheese; the camera is on us, baby. If you can bring this attitude into your fiction, you may not find it easier to create brilliant characters, but it will be harder for you to create the sort of one-dimensional dopes that populate so much pop fiction.</p> <p>We see her go through dangerous mood-swings, but I tried never to come right out and say “Annie was depressed and possibly suicidal that day” or “Annie seemed particularly happy that day.” If I have to tell you, I lose. If, on the other hand, I can show you a silent, dirty-haired woman who compulsively gobbles cake and candy, then have you draw the conclusion that Annie is in the depressive part of a manic-depressive cycle, I win.</p> <p>practice is invaluable (and should feel good, really not like practice at all) and that honesty is indispensable</p> <p>Symbolism exists to adorn and enrich, not to create a sense of artificial profundity.</p> <p>it seems to me that every book—at least every one worth reading—is about something. Your job during or just after the first draft is to decide what something or somethings yours is about. Your job in the second draft— one of them, anyway—is to make that something even more clear</p> <p>how much and how many drafts? For me the answer has always been two drafts and a polish (with the advent of word-processing technology, my polishes have become closer to a third draft).</p> <p>you’re not ready to go back to the old project until you’ve gotten so involved in a new one (or re-involved in your day-to-day life) that you’ve almost forgotten the unreal estate that took up three hours of your every morning or afternoon for a period of three or five or seven months.</p> <p>yet it will also be like reading the work of someone else, a soul-twin, perhaps. This is the way it should be, the reason you waited. It’s always easier to kill someone else’s darlings than it is to kill your own.</p> <p>You can’t let the whole world into your story, but you can let in the ones that matter the most. And you should.</p> <p>The truth is that most writers are needy. Especially between the first draft and the second, when the study door swings open and the light of the world shines in.</p> <p>Formula: 2nd Draft = 1st Draft - 10%. Good luck.”</p> <p>The most important things to remember about back story are that (a) everyone has a history and (b) most of it isn’t very interesting. Stick to the parts that are, and don’t get carried away with the rest. Long life stories are best received in bars, and only then an hour or so before closing time, and if you are buying.</p> <p>You should also pick up the writers’ journals and buy a copy of Writer’s Market, the most valuable of tools for the writer new to the marketplace</p> <h2>Chapter 5 On Living: A Postscript</h2> <p>The scariest moment is always just before you start.</p> <pre class=\"codehilite\"><code>After that, things can only get better. </code></pre>  <p>Writing isn’t about making money, getting famous, getting dates, getting laid, or making friends. In the end, it’s about enriching the lives of those who will read your work, and enriching your own life, as well. It’s about getting up, getting well, and getting over. Getting happy, okay? Getting happy</p>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'The Elements Of Style.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "The Elements Of Style.md","path": "Other/Books/Highlights & Notes/The Elements Of Style.md","content": "<h1>3. Enclose parenthetic expressions between commas</h1> <p>The abbreviation etc. , even if only a single term comes before it, is always preceded by a comma.</p> <h1>5. Do not join independent clauses by a comma</h1> <p>If two or more clauses, grammatically complete and not joined by a conjunction, are to form a single compound sentence, the proper mark of ponctuation is a semiclon.</p> <p>Stevenson&rsquo;s romances are entertaining; they are full of exiting adventures.<br /> It is nearly half past five; we cannot reach town before dark.</p> <h1>6. Do not break sentences in two</h1> <p>If the clauses are very short, and are alike in form, a comma is usually permissible: <br /> Man proposes, God disposes.<br /> The gate swung apart, the bridge fell, the portcullis was drawn up.</p> <h1>7. A participal phrase at the beggining of a sentence must refer to the grammatical subject</h1> <p>A Participal Phrase At The Beggining Of A Sentence Must Refer To The Grammatical Subject. <br /> Walking slowly down the road, he saw a woman accompanied by two chilkdren.<br /> The word walking refers to the subject of the sentence, not to the woman. If the writer wishes to make it refer to the woman, he must recast the sentence:<br /> He saw a woman, accompanied by two children, walking slowly down the road.</p> <h1>9. Make the paragraph the unit of composition: one paragraph to each topic</h1> <p>Thus a brief description, a brief summary of a literary work, a brief account of a single incident, a narrative merely outlining an action, the setting forth of a single idea, any one of these is best written in a single paragraph.</p> <p>A novel might be discussed under the heads:<br /> J. Setting<br /> K. Plot<br /> L. Characters<br /> M. Purpose</p> <p>In dialogue, each speech, even if only a single word, is a paragraph by itself; that is, a new paragraph begins with each change of speaker.</p> <h1>10. As a rule, begin each paragraph with a topic sentence; end it in conformity with the beginning</h1> <p>The practice here recommended enables him to discover the purpose of each paragraph as he begins to read it, and to retain purpose in mind as he ends it.<br /> A. the topic sentence comes at or near the beginning;<br /> B. the succeding sentences explain or establish or develop the statement made in the topic sentence; and<br /> C. the final sentence either emphasizes the thought of the topic sentence or states some important consequence</p> <p>According to the writter&rsquo;s purpose, he may, as indicated above, relate the body of the paragraph to the topic sentence in one or more of several different ways.</p> <h1>11. Use the active voice</h1> <p>The active voice is usually more direct and vigorous than the passive:<br /> I shall always remember my first visit to Boston.<br /> This is much better than:<br /> My first visit to Boston will always be remembered by me.</p> <p>There were a great number of dead leaves lying on the ground<br /> Dead leaves covered the ground.</p> <p>As a rule, avoid making one passive depend directly upon another.<br /> Gold was not allowed to be exported.<br /> It was forbidden to export gold.</p> <h1>12. Put statements in positive form</h1> <p>Make definite assertions. Avoid tame, colorless, hesitating, non-commital language. Use the word <em>not</em> as a means of denial or in antithesis, never as a means of evasion.<br /> He was not very often on time. &gt; He usually came late.</p> <p>Consciously or unconsciously, the reader is dissatisfied with being told only what is not; he wishes to be told what is.</p> <p>The antithesis of negative and positive is strong: <br /> Not charity, but simple justice.<br /> Not that I loved Caesar less, but Rome the more.</p> <h1>13. Omit needles words</h1> <p>Who is, which was, and the like are often superfluos.<br /> His brother, who is a member of the same firm. &gt; His brother, a member of the same firm.</p> <h1>14. Avoid a succession of loose sentences</h1> <p>This rule refers especially to loose sentences of a particular type, those consisting of two co-ordinate clauses, the second introduced by a conjuction or relative.</p> <h1>15. Express co-ordinate ideas in similar form</h1> <p>An article or a preposition applying to all members of a series must either be used only before the first term or else be repeated before each term.</p> <p>Correlative expressions (both, and: not, but; not only, but also; either, or; first, second, third; and the like) should be followed by the same grammatical construction. Many violations of this rule can be corrected by rearranging the sentence:<br /> It was both a long ceremony and very tedious. &gt; The ceremony was both long and tedious.</p> <h1>16. Keep related words together</h1> <p>The subject of a sentence and the principal verb should not, as a rule, be separated by a phrase or clause tha can be transfered to the beginning.</p> <p>Wordsworth, in the fifth book of The Excursion, gives a minute description of this church. &gt; In the fifth book of the Excursion, Wordsworth gives a minute description of this church.</p> <p>THe objection is that the interposed phrase or clause needlessly interrupts the natural order of the main clause.</p> <h1>17. In summaries, keep to ine tense</h1> <h1>18. Place the emphatic words of a sentence at the end</h1> <p>The proper place for the word, or group of words, wich the writer desires to make most prominent is usually the end of the sentence.<br /> Humanity has hardly advanced in fortitude sinde that time, though it has advanced in many other ways. &gt; Humanity, since that time, has advanced in many other ways, but it has hardly advanced in fortitude.</p> <p>Any element in the sentence, other than the subject, becomes emphatic when placed first.<br /> Deciet or treachery he could never forgive.</p> <p>To recieve special emphasis, the subject of a sentence must take the position of the predicate.<br /> Through the middle of the valley flowed a winding stream.</p> <h1>A few matters of the form</h1> <p>Numerals. Do not spell out dates or other serial numbers.<br /> Write them in figures or in roman notation, as may be appropriate.</p> <p>Parentheses. A sentence containing an expression in parenthesis is punctuated, outside of the marks of parenthesis, exactly as if the expression in parenthesis were absent. The expression within is punctuated as if it stood by itself, except that the final stop is omitted unless it is a question mark or an exclamation point.</p> <p>Quotations. Formal quotations, cited as documentary ecidence, are introduced by a colon and enclosed in quotation marks.</p> <h1>Words and expressions commonly misused</h1> <p>Consider. Not followed by <em>as</em> when it means &ldquo;believe to be.&rdquo; &ldquo;I consider him thoroughly competent.&rdquo;</p> <p>Effect. As noun, means <em>result</em>; as verb, means <em>to bring about, accomplish</em> (not to be confused with <em>affect</em>, which means &ldquo;to influence&rdquo;).<br /> As noun, often loosly used in perfunctory writing about fashion, music, painting, and other arts: &ldquo;an Oriental <em>effect</em>&ldquo;</p> <p>At the end of a list introduced by <em>such as</em>, <em>for example</em>, or any other similar expression, <em>etc.</em> is incorrect.</p> <p>When however comes first, it means <em>in whatever way</em> or <em>to whatever extent</em>.<br /> However you advise him, he will probably do as he thinks best. &gt; However discouraging the prospect, he never lost heart.</p> <p><em>Less</em> refers to quantity, <em>fewer</em> to number. &ldquo;His troubles are less than mine&rdquo; means &ldquo;His troubles are not so great as mine.&rdquo;<br /> &ldquo;His troubles are fewer than mine&rdquo; means &ldquo;His troubles are not so numerous as mine.&rdquo;</p> <p>Often vaguely used in such expressions as &ldquo;lover of nature;&rdquo; &ldquo;poems about nature.&rdquo; Unless more specific statemenst follow, the reader cannot tell wether the poems have to do with natural scenery, rural life, the sunset, the untracked wilderness, or the habits of squirrels.</p> <p>People. <em>The people</em> is a political term, not to be confused with <em>the public</em>. From the people comes political support or opposition; from the public comes artistic appreciation or commercial patronage.</p> <p>Phase. Means a stage of transition or development: &ldquo;the phases of the moon;&rdquo; &ldquo;the last phase.&rdquo; Not to be used for <em>aspect</em> or <em>topic</em>.<br /> Another phase of the subject &gt; Another point (another question)</p> <p>So. Avoid, in writing, the use of <em>so</em> as an intensifier: &ldquo;so good;&rdquo; &ldquo;so warm;&rdquo; &ldquo;so delightful.&rdquo;</p> <p>In general, the writer will do well to use <em>while</em> only with strict literalness, in the sense of <em>during the time that</em>.</p>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'The Great Divorce.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "The Great Divorce.md","path": "Other/Books/Highlights & Notes/The Great Divorce.md","content": "<h1>Annotations for “The Great Divorce”</h1> <p>13 Annotations</p> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/10!/4[text]/2[fm01]/6/2,/3:490,/3:772)</code></p> <blockquote> <p>Even on the biological level life is not like a river but like a tree. It does not move towards unity but away from it and the creatures grow further apart as they increase in perfection. Good, as it ripens, becomes continually more different not only from evil but from other good.</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/26!/4[text]/2[ch08]/6/4,/1:0,/1:381)</code></p> <blockquote> <p>The sense of danger, which had never been entirely absent since I left the bus, awoke with sharp urgency. I gazed around on the trees, the flowers, and the talking cataract: they had begun to look unbearably sinister. Bright insects darted to and fro. If one of those were to fly into my face, would it not go right through me? If it settled on my head, would it crush me to earth?</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/28!/4[text]/2[ch09]/6,/38/1:49,/40/1:149)</code></p> <blockquote> <p>Is there really a way out of Hell into Heaven?’ ‘It depends on the way ye’re using the words. If they leave that grey town behind it will not have been Hell. To any that leaves it, it is Purgatory.</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/28!/4[text]/2[ch09]/6/46,/1:1,/1:425)</code></p> <blockquote> <p>Son,’ he said, ‘ye cannot in your present state understand eternity: when Anodos looked through the door of the Timeless he brought no message back. But ye can get some likeness of it if ye say that both good and evil, when they are full grown, become retrospective. Not only this valley but all their earthly past will have been Heaven to those who are saved. Not only the twilight in that town, but all their life on Earth</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/28!/4[text]/2[ch09]/6,/58/1:1,/60/3:58)</code></p> <blockquote> <p>Then those people are right who say that Heaven and Hell are only states of mind?’ <br /> ‘Hush,’ he said sternly. ‘Do not blaspheme. Hell is a state of mind—ye never said a truer word. And every state of mind, left to itself, every shutting up of the creature within the dungeon of its own mind—is, in the end, Hell. But Heaven is not a state of mind. Heaven is reality itself. All that is fully real is Heavenly. For all that can be shaken will be shaken and only the unshakeable remains.</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/28!/4[text]/2[ch09]/6/68,/1:38,/1:417)</code></p> <blockquote> <p>The choice of every lost soul can be expressed in the words “Better to reign in Hell than serve in Heaven.” There is always something they insist on keeping even at the price of misery. There is always something they prefer to joy—that is, to reality. Ye see it easily enough in a spoiled child that would sooner miss its play and its supper than say it was sorry and be friends.</p> </blockquote> <hr /> <p><strong>red</strong> - <code>epubcfi(/6/28!/4[text]/2[ch09]/6/118,/5:993,/5:1136)</code></p> <blockquote> <p>an escape from the doom of being a Ghost yet still fearing Ghosts—fearing even the Ghost it is. For to be afraid of oneself is the last horror.</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/32!/4[text]/2[ch11]/6/112,/5:386,/5:456)</code></p> <blockquote> <p>It is a stronger angel, and therefore, when it falls, a fiercer devil.</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/32!/4[text]/2[ch11]/6/120,/1:159,/1:415)</code></p> <blockquote> <p>But someone must say in general what’s been unsaid among you this many a year: that love, as mortals understand the word, isn’t enough. Every natural love will rise again and live forever in this country: but none will rise again until it has been buried.’</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/36!/4[text]/2[ch13]/6/108,/3:172,/3:408)</code></p> <blockquote> <p>Every disease that submits to a cure shall be cured: but we will not call blue yellow to please those who insist on still having jaundice, nor make a midden of the world’s garden for the sake of some who cannot abide the smell of roses.</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/36!/4[text]/2[ch13]/6,/134/1:1,/136/1:91)</code></p> <blockquote> <p>I see,’ said I at last. ‘She couldn’t fit into Hell.’<br /> He nodded. ‘There’s not room for her,’ he said. ‘Hell could not open its mouth wide enough.</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/36!/4[text]/2[ch13]/6,/138/1:1,/144/1:0)</code></p> <blockquote> <p>And she couldn’t make herself smaller?—like Alice, you know.’<br /> ‘Nothing like small enough. For a damned soul is nearly nothing: it is shrunk, shut up in itself. Good beats upon the damned incessantly as sound waves beat on the ears of the deaf, but they cannot receive it. Their fists are clenched, their teeth are clenched, their eyes fast shut. First they will not, in the end they cannot, open their hands for gifts, or their mouth for food, or their eyes to see.’<br /> ‘Then no one can ever reach them?’</p> </blockquote> <hr /> <p><strong>aqua</strong> - <code>epubcfi(/6/36!/4[text]/2[ch13]/6,/144/1:1,/150/1:20)</code></p> <blockquote> <p>Only the Greatest of all can make Himself small enough to enter Hell. For the higher a thing is, the lower it can descend—a man can sympathise with a horse but a horse cannot sympathise with a rat. Only One has descended into Hell.’<br /> ‘And will He ever do so again?’<br /> ‘It was not once long ago that He did it. Time does not work that way when once ye have left the Earth. All moments that have been or shall be were, or are, present in the moment of His descending. There is no spirit in prison to Whom He did not preach.’<br /> ‘And some hear him?’</p> </blockquote>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'The Housekeeper and the Professor.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "The Housekeeper and the Professor.md","path": "Other/Books/Highlights & Notes/The Housekeeper and the Professor.md","content": "<blockquote> <p>he believed that mistakes were often as revealing as the right answers</p> <p>I realized that he talked about numbers whenever he was unsure of what to say or do. Numbers were also his way of reaching out to the world. They were safe, a source of comfort.</p> <p>You swoop down on the numbers, like a kingfisher catching the glint of sunlight on the fish&rsquo;s fin</p> <p>The sound of the rain seemed louder in the study, as if the sky were actually lower there.</p> <p>Somehow, I had never quite understood what it meant for him to wake up alone each morning to this cruel revelation.</p> </blockquote>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'The Ocean at the End of the Lane.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "The Ocean at the End of the Lane.md","path": "Other/Books/Highlights & Notes/The Ocean at the End of the Lane.md","content": "<h1>Sumário</h1> <p>Magical Realism. Simbolismo, mistério, fantasia.<br /> É uma história sobre um rapaz de 7 anos que vive numa grande casa com grandes jardins, com os seus pais e a sua irmã.</p> <p>Os pais começaram a ter problemas económicos, por isso passaram a arrendar um dos quartos da casa. O último a ficar nesse quarto foi o <em>Opal Miner</em>. O <em>Opal Miner</em> roubou o carro da família e suicídou-se dentro do carro com o monóxido de carbono do escape. O rapaz e o seu pai descobriram isto, chamaram a polícia e, enquanto isso, o rapaz ficou numa casa lá perto, a casa das <em>Hempstock</em>, onde conheceu a Letie, de 11 anos.</p> <p>A morte do Opal miner provocou umas mudanças no ambiente daquela zona.<br /> Acordou uma endidade que quer &ldquo;satisfazer&rdquo; as pessoas; dinheiro começa a aparecer enterrado, dentro das coisas - o protagonista tem um sonho e acorda com uma moeda presa na sua garganta um pouco mais tarde destes eventos começarem a acontecer.</p> <p>Ele e a Letie vão explorar o terreno para encontrar a fonte/ a tal entidade.<br /> Encontram-na, e a Lettie tenta selá-la, no entanto a entidade consegue infiltrar-se no rapaz, chamando-lhe mais tarde de &ldquo;porta&rdquo;, a sua ligação a este mundo que não é a sua &ldquo;casa&rdquo;.</p> <p>A entidade depois aparece em forma humana, e acabam só por conseguir fazê-la desaparecer chamando &ldquo;varmits&rdquo;, entidades que parecem corvos e que comem espécies como a dela. No entanto, não se vão embora depois de a fazer desaparecer/ devorar. Ainda existe uma entrada no coração do rapaz.</p> <p>Mais tarde, o rapaz acaba por se sacrificar mas Letie salva-o dando <em>em parte</em> a sua vida; ficou extremamente magoada, o mais magoada que poderia ficar tendo em conta a sua existência naquele mundo, no entanto, a sua presença trasncende também aquele mundo, os Hempstock não são entidades <em>normais</em>. A avó acorda do seu sono e expulsa os varmits, e a mãe da Letie coloca a Letie no pequeno e infinito oceano, e o que resta é esperar que ela um dia retorne, ou talvez que o oceano a retorne.</p> <h1>Quotes</h1> <blockquote> <p>Doing fine, thank you, I would say, never knowing how to talk about what I do. If I could talk about it, I would not have to do it. I make art, sometimes I make true art, and sometimes it fills the empty places in my life. Some of them. Not All.</p> <p>I thought for a bit. Then I asked, &ldquo;How long have you been eleven for?&rdquo;<br /> She smiled at me.</p> <p>The old woman gave me a lump of honeycom, from the Hempstock&rsquo;s own beehive, on a chipped saucer, and poured a little cream over it from a jug. I ate it with a spoon, chewing the wax like gum, letting the honey flow into my mouth, sweet and sticky with and aftertaste of wildflowers.</p> <p>Her fingers opened like flowers in a speed-up film.</p> <p>Grown-ups don&rsquo;t look like grown-ups on the inside either.<br /> Outside, they&rsquo;re big and thoughless and they always know what they&rsquo;re doing. Inside, they look just like they always have. Like they did when they were your age. The truth is, there aren&rsquo;t any grown-ups. Not one, in the whole wide world.</p> <p>wake up an atom bomb</p> <p>&ldquo;Will she be the same?&rdquo; The old woman guffawed, as if I had said the funniest thing in the universe. &ldquo;Nothing&rsquo;s ever the same&rdquo; she said.</p> <p>&ldquo;You don&rsquo;t pass or fail at being a person, dear.&rdquo;</p> </blockquote>"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: 'Drawing',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Design And Invention',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Anatomy',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Anatomy and Motion.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Anatomy and Motion.md","path": "Other/Drawing/Design And Invention/Anatomy/Anatomy and Motion.md","content": "<p>The following studies/ diagrams describe activities of the body by designing the anatomical shapes with one simple rule (active/ passive or squash/ stretch).</p> <blockquote> <p>[!tip]<br /> &ldquo;S&rdquo; Curve = Stretch or passive anatomical shape<br /> &ldquo;C&rdquo; Curve = Pinch or active anatomical shape</p> </blockquote> <p><img alt=\"drawing_57.png\" src=\"public/attachments/drawing_57.png\" /></p> <p><img alt=\"drawing_58.png\" src=\"public/attachments/drawing_58.png\" /></p> <p>Active shapes of anatomy will take the basic sesign of the shape and show it squashed or in a compressed stated. Extreme activity has more exaggerated compression, while a less extreme action may only have a slightly compressed appearence.</p> <p>A non-active (passive) shape will be stretched or shown elongated. This active vs. passive demonstration of anatomy is incredibly important for keeping the believable asymmetrical quality to your drawings, as well as accurately describing the mechanincs of the body.</p> <p><img alt=\"drawing_59.png\" src=\"public/attachments/drawing_59.png\" /></p> <p>Next: [[Sternocleidomastoid]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Back View.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Back View.md","path": "Other/Drawing/Design And Invention/Anatomy/Back View.md","content": "<p>It is important to keep in mind the overall process at this point.<br /> Remember the progression: Gesture, Shapes, Landmarks/ Volume, Anatomy, Value.</p> <p>Think of these as all being related. Any time you move to another step, that step still needs to address all that came before it. For example, when we start to develop anatomy, we have to address the three steps that came before it in order to stay true to the original intention or gesture. Additionaly, remember that drawing the pecs or deltoid is the description of a smaller or micro-gesture that is a smaller argument in support of the larger area (the initial gesture).</p> <p><img alt=\"\" src=\"drawing_55.png\" /></p> <p>Next: [[Anatomy and Motion]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Deltoid.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Deltoid.md","path": "Other/Drawing/Design And Invention/Anatomy/Deltoid.md","content": "<h1>Shape</h1> <p>Seen from the side, the shape of the deltoid resembles an upside-down triangle. From the front or back, the deltoid still appears as a triangle - just a much thinner one.</p> <p><img alt=\"drawing_80.png\" src=\"public/attachments/drawing_80.png\" /></p> <blockquote> <p>The red line in this diagram represents the area of connection for the deltoid<br /> <img alt=\"drawing_81.png\" src=\"public/attachments/drawing_81.png\" /></p> </blockquote> <p>The above diagram represents a second perspective structure to describe the shoulder girdle. The shoulder girdle is the combination of the clavicle and scapula. This structure sits <strong>on top of the rib cage</strong> and acts as an incredibly useful tool for organizing/ understanding the shoulders.</p> <p><img alt=\"drawing_82.png\" src=\"public/attachments/drawing_82.png\" /></p> <h1>Volume</h1> <p>The most effective way to show the deltoid in perspective, with a strong sense of volume, is by wrapping its insertioin point in the same perspective as the direction of the arm.</p> <p>The deltoid should also reflect the perspective of the upper body as its origin pulls away from the shoulder girdle.</p> <p><img alt=\"drawing_83.png\" src=\"public/attachments/drawing_83.png\" /><br /> <img alt=\"drawing_84.png\" src=\"public/attachments/drawing_84.png\" /></p> <p>Next: [[Rectus Abdominis]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Erector Spinae.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Erector Spinae.md","path": "Other/Drawing/Design And Invention/Anatomy/Erector Spinae.md","content": "<h1>Gesture</h1> <p>The erector spinae (or sacrospinalis) is a muscle group that extends the vertebral column and head, as well as aiding in flexion and rotation. This muscle group begins on the inner surface of the iliac crest and ends into numerous points on the back of all twelve ribs, and eventually into the skull.</p> <h1>Shape</h1> <p>The erector spinae can be simplified into a shape that resembles two corn dogs side-by-side, or two ovoid shapes above two cylinders. Depending on the activity taken by the figure, these simple shapes can easily be shown to pinch (by contracting their shape) or stretch (by elongating the forms).</p> <p><img alt=\"drawing_94.png\" src=\"public/attachments/drawing_94.png\" /></p> <h1>Volume</h1> <p>The volume of the erector spinae should be shown following the perspective and volume of the spine, rib cage and pelvis.</p> <p><img alt=\"drawing_95.png\" src=\"public/attachments/drawing_95.png\" /><br /> <img alt=\"drawing_96.png\" src=\"public/attachments/drawing_96.png\" /><br /> <img alt=\"drawing_97.png\" src=\"public/attachments/drawing_97.png\" /></p> <p>Next: [[Latissimus Dorsi]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Introduction to Anatomy.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Introduction to Anatomy.md","path": "Other/Drawing/Design And Invention/Anatomy/Introduction to Anatomy.md","content": "<p>The most important step in developing a drawing that includes anatomy is to first work through a process.<br /> Working through gesture, shapes, landmarks, and then volume gives your drawings a sense of solidity that the anatomy will need to respond to.</p> <p>The muscles pointed out in this section are only muscles seen or affecting the surface of the forms, i.e. this is a highly simplified approach to anatomy meant to serve as a foundation of a working process.</p> <p>In understanding the muscles, the same approach to the figure is implemented: first, gesture and shape, then the development of volume and perspective.</p> <p><img alt=\"drawing_54.png\" src=\"public/attachments/drawing_54.png\" /></p> <p>Next: [[Process]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Latissimus Dorsi.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Latissimus Dorsi.md","path": "Other/Drawing/Design And Invention/Anatomy/Latissimus Dorsi.md","content": "<h1>Gesture</h1> <p>Adducts, extends, and rotates the humerus. Additionally, the latissimus pulls the arms down (like when swimming) or lifts the body up (as in climbing).</p> <p>The latissimus originates along the lower sixth thoracic vertebrae and the crest of the ilium. It inserts on the front of the humerus higher than the attachment of the pectoralis.</p> <h1>Shape</h1> <p>The shape of the latissimus resembles a bowl with arms and legs. The arms on the sides of the bowl are small triangles. The design of these arms suggests that the shape of the latissimus, like the pectoralis, unfolds when it is stretched.</p> <p><img alt=\"drawing_98.png\" src=\"public/attachments/drawing_98.png\" /><br /> <img alt=\"drawing_99.png\" src=\"public/attachments/drawing_99.png\" /></p> <h1>Volume</h1> <p>The latissimus can be given perspective and a feeling of volume by wrapping the top of the shape with the perspective of the bottom of the rib cage (from behind).<br /> As the bottom of the latissimus ends on the pelvis, it should be drawn to sit on the perspective of the pelvis.</p> <p><img alt=\"drawing_100.png\" src=\"public/attachments/drawing_100.png\" /><br /> <img alt=\"drawing_101.png\" src=\"public/attachments/drawing_101.png\" /><br /> <img alt=\"drawing_102.png\" src=\"public/attachments/drawing_102.png\" /><br /> <img alt=\"drawing_103.png\" src=\"public/attachments/drawing_103.png\" /></p> <p>Next: [[The Arm]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Obliques.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Obliques.md","path": "Other/Drawing/Design And Invention/Anatomy/Obliques.md","content": "<h1>Gesture</h1> <p>The external oblique attaches to the lower eight ribs of the rib cage, running downwards and to the back, inserting into the pelvis.</p> <p>The function of this muscle is to bend the trunk laterally, to twist, and when both sides are used simultaneously the rib cage will be pulled down towards the pelvis.</p> <p><img alt=\"drawing_88.png\" src=\"public/attachments/drawing_88.png\" /><br /> <img alt=\"drawing_89.png\" src=\"public/attachments/drawing_89.png\" /></p> <h1>Shape</h1> <p>The shape of the obliques can be thought of as two elongated rectangels, similar to two colummns supporting the rib cage over the pelvis.</p> <p>When drawing this shape, attach the obliques to a wrapping line lower down on the form of the rib cage, while relating them from the side to the back.</p> <p><img alt=\"drawing_90.png\" src=\"public/attachments/drawing_90.png\" /></p> <h1>Volume</h1> <p>When assigning volume to the obliques, make the shape wrap around the existing forms, but also think of this shape as having a depth similar to a flattened box.</p> <p><img alt=\"drawing_91.png\" src=\"public/attachments/drawing_91.png\" /></p> <p>Next: [[Serratus Anterior]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Pectoralis Major.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Pectoralis Major.md","path": "Other/Drawing/Design And Invention/Anatomy/Pectoralis Major.md","content": "<h1>Gesture</h1> <p>The pectoralis muscle pulls the arm forward across the chest and rotates the arms medially. </p> <p>Remeber the description of the muscle&rsquo;s action is what you want to look for when deciding the &ldquo;C&rdquo; or the &ldquo;S&rdquo; curve, which again is the basic gesture to the muscle. It begins on the medial half of the clavicle, along the length of the sternum, and across the cartilages of the first six or seven ribs, inserting into the bicipital groove onthe front of the humerus.</p> <h1>Shape</h1> <p>The shape of the pectoralis resembles a fan, with the clavicular, sternocostal, and abnominal sections overlaping - or even more simply like a gold fish with its head missing. The flat portion of the missing head sits along the sternum, while the tail can be seen wrapping and pulling to the front of the humerus.</p> <p><img alt=\"drawing_63.png\" src=\"public/attachments/drawing_63.png\" /><br /> <img alt=\"drawing_64.png\" src=\"public/attachments/drawing_64.png\" /><br /> <img alt=\"drawing_65.png\" src=\"public/attachments/drawing_65.png\" /><br /> <img alt=\"drawing_66.png\" src=\"public/attachments/drawing_66.png\" /> </p> <p>The pectoralis can simply be thought of as a small box or rectangle sitting on top of the rib cage. The width of the pectoralis should be shown towards the bottom of the form nearest the nipple. </p> <p>The volume will be displaced depending on the action. For example, if the arm is raised, the volume is spread more evenly and will have less of a noticeable corner. If the pectoralis is flexing or contracted, the volume becomes peaked and will have a more noticeable width.</p> <h1>Volume</h1> <p>The shape will change when the arm raises by showing the tail of the goldfish unwrapping and becoming elongated.</p> <p><img alt=\"drawing_67.png\" src=\"public/attachments/drawing_67.png\" /><br /> <img alt=\"drawing_68.png\" src=\"public/attachments/drawing_68.png\" /><br /> <img alt=\"drawing_69.png\" src=\"public/attachments/drawing_69.png\" /></p> <p>Remember, this basic anatomical design can be changed to develop likeness, gender, animal, or creature.</p> <p>For example, the shape of the pectoralis can be altered in order to portray the female by overlapping a sphere (for the breast) under then over the initial pectoralis design.</p> <p><img alt=\"drawing_70.png\" src=\"public/attachments/drawing_70.png\" /><br /> <img alt=\"drawing_71.png\" src=\"public/attachments/drawing_71.png\" /><br /> <img alt=\"drawing_72.png\" src=\"public/attachments/drawing_72.png\" /></p> <p>Next: [[Trapezius]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Process.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Process.md","path": "Other/Drawing/Design And Invention/Anatomy/Process.md","content": "<p>Following this step, every muscle is looked at in isolation, as a shape. First, you should be concerned with a muscle&rsquo;s shape and its placement; second, how that shape changes in relationship to the gesture or an action; and third, how to use the shape to keep a constant sense of volume and form.</p> <ol> <li>SHAPE</li> <li>PLACEMENT</li> <li>GESTURE</li> <li>PERSPECTIVE</li> </ol> <p>Next: [[Back View]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Rectus Abdominis.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Rectus Abdominis.md","path": "Other/Drawing/Design And Invention/Anatomy/Rectus Abdominis.md","content": "<h1>Gesture</h1> <p>The rectus abdominis (or abdominal group) works to flex the trunk at the lumbar vertebrae. This muscle group begins at the base of the public bone and inserts into the surfaces of the fifth, sixth, and seventh ribs.</p> <h1>Shape</h1> <p>The abdominal group can be simplified into a shape resembling a bullet. The curved portion of the bullet fits into the pelvis, while the flattened end lies along the ribs above the thoracic arch.</p> <p><img alt=\"drawing_85.png\" src=\"public/attachments/drawing_85.png\" /></p> <p>Within this shape, there are eight sections. Starting from a straight or horizontal line around the area of the belly button, these sections progressively rise to a peak.</p> <p>When the trunk moves front, back, or side to side, this shape can be shown pinching, stretching, or aiding in a twist.</p> <p><img alt=\"drawing_86.png\" src=\"public/attachments/drawing_86.png\" /></p> <h1>Volume</h1> <p>The volume of the abdominals should be shown with a very thin side plain. This gives the viewer an indication of the depth of this muscle group. Ultimately, this volume will resemble a flattened box or rectangle.</p> <p><img alt=\"drawing_87.png\" src=\"public/attachments/drawing_87.png\" /></p> <p>Next: [[Obliques]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Serratus Anterior.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Serratus Anterior.md","path": "Other/Drawing/Design And Invention/Anatomy/Serratus Anterior.md","content": "<h1>Gesture</h1> <p>The serratus slides the scapula forward and aids in elevating the shoulder and the arm. It originates on the outer surfaces of the first eight or nine ribs and inserts into the underslide of the scapula.</p> <p><img alt=\"drawing_92.png\" src=\"public/attachments/drawing_92.png\" /></p> <h1>Volume</h1> <p>The volume of the serratus should show the muscle as a sphere or ovoid form. Additionally, this muscle should appear to be a smaller form sitting on the larger form of the rib cage.</p> <h1>Shape</h1> <p>The shape of the serratus can resemble an egg form with three legs or tabs coming out from the bottom. <br /> The top portion of the egg represents the muscle pulling under and to the bottom of the scapula, while the feet or tabs shows the muscle pulling into and between the ribs. Additionally, these feet can be shown connecting into the upper portion of the obliques in order to develop a strong connection between the anatomical shapes.</p> <p><img alt=\"drawing_93.png\" src=\"public/attachments/drawing_93.png\" /></p> <p>Next: [[Erector Spinae]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Sternocleidomastoid.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Sternocleidomastoid.md","path": "Other/Drawing/Design And Invention/Anatomy/Sternocleidomastoid.md","content": "<h1>Gesture</h1> <p>The sternomastoid muscles work to <strong>pull the head and neck forward as well as rotate and face laterally</strong>. These muscles begin on the interior surface of the manubrium and clavicle and insert into the skull behind the ear.</p> <h1>Shape</h1> <p>The sternomastoid can easily be remembered as a shape that resembles a baseball bat. When placing this shape, remember that it is aligned in a diagonal from the manubrium to the base of the skull.</p> <p>Additionally, the shape of the sternamastoid should not be drawn symmetrically. One side of the shape is always higher, mimicking the design principles in our gesture.</p> <p><img alt=\"drawing_60.png\" src=\"public/attachments/drawing_60.png\" /></p> <p>When the head turns, the involvement of these muscles can be indicated by elongating their shapes (indicating a passive state or stretch) or by contracting and shortening the form (which will indicate an active state or the muscle being used).</p> <p><img alt=\"drawing_61.png\" src=\"public/attachments/drawing_61.png\" /></p> <h1>Volume</h1> <p>The volume of the sternomastoid should be shown wrapping around the cylinder of the neck while moving back spatially to suggest the distance from the manubrium back to the base of the skull.</p> <p><img alt=\"drawing_62.png\" src=\"public/attachments/drawing_62.png\" /></p> <p>Next: [[Pectoralis Major]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Trapezius.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Trapezius.md","path": "Other/Drawing/Design And Invention/Anatomy/Trapezius.md","content": "<h1>Gesture</h1> <p>The trapezius rotates, lifts and pulls the scapula. Its origin is at the base of the scull and down to the twelve thoracic vertebrae. The trapezius inserts along the lateral third of the clavicle, the upper edge of the spine of the scapula, and ending at the tubercle of the spine.</p> <h1>Shape</h1> <p>The trapezius can be more easily used and remembered by simplying it into a basic shape. The complex shape of the trapezius can be thought of as an upside-down dagger.</p> <p>The top or handle of the dagger is the portion of the muscle inserting into the base of the skull. As the wings of the trapezius swing down the top of the scapula, the handles of the dagger can be seen. <br /> Where the muscle pulls in a point to the spine, the blade of the dagger can be seen.</p> <p><img alt=\"drawing_73.png\" src=\"public/attachments/drawing_73.png\" /><br /> <img alt=\"drawing_74.png\" src=\"public/attachments/drawing_74.png\" /><br /> <img alt=\"drawing_75.png\" src=\"public/attachments/drawing_75.png\" /><br /> <img alt=\"drawing_76.png\" src=\"public/attachments/drawing_76.png\" /></p> <p>The shape of the trapezius can also change to suggest a movement or activity. Notice how the shape of the trapezius pinches when the scapula moves closer to the spine. Conversly, when the scapula pulls forward with the movement of the arm, the trapezius is stretched and is shown as thinner, pulling across the ribs beneath.</p> <p><img alt=\"drawing_77.png\" src=\"public/attachments/drawing_77.png\" /></p> <p>Additionally, the shape of the trapezius (along with all the overall shape of every muscle can be altered to suggest gender, type, or character).</p> <h1>Volume</h1> <p>The volume of the trapezius should be shown moving across the major forms it rests on - the head, neck, scapulae, and rib cage. <br /> Additionally, its volume will be affected when the muscle&rsquo;s shape is stretched or pinched.</p> <p><img alt=\"drawing_78.png\" src=\"public/attachments/drawing_78.png\" /></p> <p><img alt=\"drawing_79.png\" src=\"public/attachments/drawing_79.png\" /></p> <p>Next: [[Deltoid]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Drapery.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Drapery.md","path": "Other/Drawing/Design And Invention/Drapery.md","content": "<p>When drawing drapery, all of the previous principles are used in a way to encourage your working process and hopefully simplify a difficult subject. Again, keep in mind that all the shapes discussed can and will need to be manipulated in order to accommodate the myriad possibilities for different fashions/looks from the scope of history. This process should set you up with a foundation for depicting simple fabrics that move with and wrap around the figure, that can later be expanded upon. </p> <p>To begin, there are only a few things that need to be addressed as being completely new to this area of study. First, in most cases, the gesture of drapery is consistent with gravity, and has a descending linear direction. However, this changes in any type of pose where movement or external conditions (for example, wind) are present. Second, different types of drapery (silk, leather, denim, cotton, etc.) have totally unique qualities in the way they respond to movement and form.</p> <p><img alt=\"drawing_166.png\" src=\"public/attachments/drawing_166.png\" /></p> <p>In the study of drapery, we will focus on seven different types of folds that will be intimately linked to tension points located on the figure. </p> <p>Tension points are the same as landmarks, just renamed to relate them more to the push or grab of fabric. In order to emphasize how these tension points work, try thinking of the skeletal points as being a large, moveable wire hanger. Thinking in this way will make the study of drapery easier, as you will see the seven folds repeatedly occur in the same places. </p> <p>Additionally, take note that although we are looking at the seven folds in isolation, they have the ability to mix together. The challenge is to simplify and edit what you see for clarily so that the movement and form of the figure have the primary read. </p> <p>Beyond the new information presented above, the exact same techniques will be used to interpret and show drapery on the figures: wrapping lines, &ldquo;T&rdquo; overlaps, pinch vs. stretch, crisp sharp lines vs. softer gradations, and so on. </p> <p>The first fold is called an end fold. The simple idea behind this fold is that when drapery ends, it always describes the perspective of whatever form it is conforming to. In other words, the end fold will always just fit to a wrapping line on whatever perspective it follows.</p> <p><img alt=\"drawing_167.png\" src=\"public/attachments/drawing_167.png\" /></p> <p>The second fold is called a cylinder fold. The cylinder fold is characterized by a consistent placement of tension points. This consistent placement of tension points results in the fabric looking as though there are a number cylinders lined up next to one another. Apart from the figure, you can see examples of this fold in a shower curtain, window curtains, or anywhere else where there is a consistent grab to the fabric. In addition to the fold or fabric as a static form, keep in mind that this fold can change shape through gesture, just like the anatomical shapes. This fold, as well as all the others, stretch or pinch based on how the figure pushes the tension points. </p> <p>The third fold is a &ldquo;U&rdquo; fold. Notice the &ldquo;U&rdquo; fold is caused by the drapery being suspended between two main tension points. Additionally, notice the squash and stretch of the fold is still designed with &ldquo;C&rdquo; and &ldquo;S&rdquo; curves. This fold can potentially appear between tension points (landmarks) that have fabric suspended between them. </p> <p>The fourth fold is called a pinch fold. A pinch fold can take place between any two tension points in close enough proximity to pinch fabric between them for example, the bend of the arm or leg, between the neck and shoulder, the rib cage against the pelvis, etc.</p> <p><img alt=\"drawing_168.png\" src=\"public/attachments/drawing_168.png\" /></p> <p>The fifth fold is called a &ldquo;S&rdquo; or spiral fold. The &ldquo;S&rdquo; fold represents two tension points twisting the fabric in opposing directions. This could take place on the arm, or, in the case of longer draping clothing, from head to fool (in the case of a twist of the whole body). Notice that the main design of the fold is first described as the &ldquo;S&rdquo; connecting two points, then wrapping across the two volumes, and ending behind the forms in a &ldquo;T&rdquo; overlap. </p> <p>The sixth fold is the &ldquo;Z&rdquo; fold. The &ldquo;Z&rdquo; fold is based off the letter to help remember the asymmetrical compression of clothing as a result of gravity and excess fabric. This fold is most likely seen at the bottom of the pants/leg. In this particular example, remember that you also want to combine the &ldquo;Z&rdquo; fold with the end fold to describe the compression of fabric that ends with the perspective of the form it is on.</p> <p><img alt=\"drawing_169.png\" src=\"public/attachments/drawing_169.png\" /></p>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Gesture Drawing',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Center of Gravity.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Center of Gravity.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/Center of Gravity.md","content": "<p>After developing your figure&rsquo;s pose as a gesture drawing , you will next give a more concrete description of the major masses: the head, rib cage, and pelvis. Manipulating the figure&rsquo;s center of gravity in an exaggerated manor is essential in creating an interesting pose. On top of the gesture, add a sphere for the head, an egg shape for the rib cage, and a horizontal egg shape for the pelvis.</p> <p><img alt=\"drawing_13.png\" src=\"public/attachments/drawing_13.png\" /></p> <p>Creating  a dynamic pose involves creating a sense of tension with the figure&rsquo;s center of gravity. Just as our initial gesture lines create a sense of movement with an imbalance in the placement of line, you should flirt with the idea of imbalance when drawing the shapes of the head, rib cage, and pelvis.</p> <p>On the left and right, notice how the major masses move around the center of gravity without lining up on it. The last pose is the most dramatic in its distribution of the masses in relation to the center of gravity.</p> <p>Next: [[Drawing/Design and Invention/Gesture Drawing/Rib Cage and Pelvis]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Economy of line.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Economy of line.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/Economy of line.md","content": "<p><img alt=\"drawing_18.png\" src=\"public/attachments/drawing_18.png\" /></p> <h1>Creating a Story</h1> <p>“Creating a sense of story” in your gesture drawings can mean a number of different things. Gesture can be the way we recognize moods through body mechanics, the innate ability to recognize your best friend from 20-30 feet away, or just simply being able to read the body as a type of communication. When studying gesture drawings, it will be a common exercise to exaggerate these positions until you become more comfortable with articulating a wide range of expressions. Once the ability to develop the exaggerated is achieved, the more natural subtleties of expression will be much easier to create.</p> <p><strong>The reason all of our design elements are focused on asymmetry, balance, movement, etc. is essentially because we are describing a machine moving through a series of controlled falls.</strong></p> <blockquote> <p>[!Tip]<br /> Remember that at no point in a gesture drawing should you be worried about developing a likeness, or drawing contour lines. Focus on the movement caused by the line use - think of these drawings as being abstract exercises in <strong>using line to move the eye.</strong></p> <p>FIgure drawing is not so much about making something that looks like a person, but instead developing incredibly complex artistic practices and skills. Learning these skills will allow you to easily create any variety of figure or character desired.</p> </blockquote> <p>Next: [[Rib Cage, Pelvis and the Back]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Form and Balance.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Form and Balance.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/Form and Balance.md","content": "<p>The most important thing to keep in mind while drawing the figure is that the human form is essentially a balancing act.</p> <p><img alt=\"drawing_3.png\" src=\"public/attachments/drawing_3.png\" /></p> <p>In the side view, the head is suspended out over the rib cage by the forward angle of the neck. The neck and head are in turn balanced by the rib cage as it pushes at the opposite angle.</p> <p>The pelvis moves opposite to the tilt of the rib cage, and the legs stabilize the body in the shape of a large &ldquo;S&rdquo;.</p> <p>The side view shows us that the skeleton is designed in a way that naturally balances the figure.</p> <p>Next: [[Symmetry and Asymmetry]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Introduction.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Introduction.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/Introduction.md","content": "<p>Let us begin by pointing out a few things gesture will <strong>not</strong> mean at this stage in the description of a figure. It does not necessarily involve expressing your innermost emotional state. It also does not involve a haphazard and excited flailing of the drawing medium on and around the page.</p> <p>In the first section of the book, the gesture is presented in a more intuitive way, in order to emphasize exaggeration.</p> <p>Next: [[The Eight Parts of the Body]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Repetition and Timing.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Repetition and Timing.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/Repetition and Timing.md","content": "<p>In addition to using asymmetry, the second quality of curve used is that of repetition. Any time a similar curve or shape is repeated twice r more, it provokes a visual movement.</p> <p><img alt=\"repetition.png\" src=\"public/attachments/repetition.png\" /><br /> The &ldquo;C&rdquo; curves placed next to one another start to push the eye from left to right.</p> <p><img alt=\"timing.png\" src=\"public/attachments/timing.png\" /></p> <p>Using asymmetrical curves in addition to repeating curves gives your gesture drawings a solid sense of composition, fluidity, and timing.</p> <p>In the diagram, notice how repeating curves cause the eye to <em>slow down</em> as it moves through the dominant asymmetrical curves. <br /> Try slowing down the eye (emphasizing repeating lines to produce more side-to-side motion) in more complex areas (areas of intersection: midsection, shoulders, hips, knee, elbow) and speeding it up along the length of forms (such as asymmetrical lines creating a faster push downwards).</p> <p>Next: [[Wrapping Lines]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Rib Cage and Pelvis.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Rib Cage and Pelvis.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/Rib Cage and Pelvis.md","content": "<p>After identifying the center of gravity, the next step is to lay in the three major masses: the head, rib cage, and pelvis.</p> <p><img alt=\"drawing_14.png\" src=\"public/attachments/drawing_14.png\" /><br /> <img alt=\"drawing_15.png\" src=\"public/attachments/drawing_15.png\" /></p> <p>Before describing the shape of the pelvis or rib cage, look for the line of its tilt (2D position/ lean). An easy way to find this is to look for the weight-bearing leg. When  the majority of weight is positioned on one leg, it usually causes this large area of bone to raise, dropping the other side</p> <p>Next: [[The <em>About To</em> Pose]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Symmetry and Asymmetry.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Symmetry and Asymmetry.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/Symmetry and Asymmetry.md","content": "<p>In order to keep this natural quality of the human form a constant in our drawings, we need a use of line that continually emphasizes visual ideas of balance and movement.</p> <p>Beginning with only a &ldquo;C&rdquo; or &ldquo;S&rdquo; curve, the main focus is on positioning one of the curve&rsquo;s apexes higher that the one that follows<br /> By keeping the high points of the curves slightly offset, the eye is forced to move through them. This gives you the ability to have a great deal of control over where the viewer&rsquo;s eye goes and how quickly.<br /> <img alt=\"drawing_4.png\" src=\"public/attachments/drawing_4.png\" /><br /> Avoid line use, which, instead of playing the curves off one another, uses mirroring or parallels. This approach closes off the form visually and does not allow for a flow between forms.</p> <blockquote> <p>[!Tip]<br /> In order to keep the two examples separte, try remembering that the asymmetrical lines give the viewer&rsquo;s eye a pinballlike experience - always bouncing the attention to a line into another direction. The symmetrical curves stiffen that experience into a snowmanshaped appearance - generally, we don&rsquo;t associate snowmen with a great deal of excited movement.</p> </blockquote> <p>Next: [[Repetition and Timing]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The Eight Parts of the Body.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "The Eight Parts of the Body.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/The Eight Parts of the Body.md","content": "<p>When developing a gesture drawing, it is important to be aware that you are describing the eight parts of the body.<br /> The eight parts include:</p> <ul> <li>Head</li> <li>Spine</li> <li>Arms (2)</li> <li>Pelvis</li> <li>Rib Cage</li> <li>Legs (2)</li> </ul> <p>The essential elements you will describe using these eight parts include a sense of story and composition. Giving the pose a &ldquo;sense of story&rdquo; means communicating a unique sense of positioning or attitude. <br /> Every person has a specific way of holding himself or herself when moving. By exaggerating the &ldquo;story,&rdquo; you give your viewer a compelling image to experience.<br /> When creating a gesture drawing, this envolves developing your figure&rsquo;s proportions and giving your figure a sense of balance and weight.</p> <p><img alt=\"drawing_1.png|300\" src=\"public/attachments/drawing_1.png|300\" /><br /> <img alt=\"drawing_2.png\" src=\"public/attachments/drawing_2.png\" /></p> <p>The lines most crucial to showing a figure are the &ldquo;C&rdquo; curve, the straight line, and &ldquo;S&rdquo; curve. In this drawing process, you will never use any other type of line.</p> <blockquote> <p>[!Tip]<br /> When checking the proportion of the figure, try to avoid doing any slow, methodical measuring. Instead, base the proportions off what looks correct after establishing the figure from head to foot. If it looks incorrect, change it - the drawing is still at an early stage where correction is easy. The downside to slowly measuring out the figure is that it stiffens the poses. Focus on the activity - the proportion can be corrected later.</p> </blockquote> <p>Next: [[Form and Balance]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The Spine.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "The Spine.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/The Spine.md","content": "<p>Developing the gesture involves considering the whole movement and relationship of the eight parts of the figure. The most important of these parts is the spine.</p> <p>The spine is responsible for the organization and balancing of the three major masses (head, rib cage and pelvis), as well as the arms and legs.</p> <p><img alt=\"drawing_6.png\" src=\"public/attachments/drawing_6.png\" /><br /> <img alt=\"drawing_7.png\" src=\"public/attachments/drawing_7.png\" /><br /> <img alt=\"drawing_8.png\" src=\"public/attachments/drawing_8.png\" /><br /> <img alt=\"drawing_9.png\" src=\"public/attachments/drawing_9.png\" /><br /> <img alt=\"drawing_10.png\" src=\"public/attachments/drawing_10.png\" /><br /> <img alt=\"drawing_11.png\" src=\"public/attachments/drawing_11.png\" /><br /> <img alt=\"drawing_12.png\" src=\"public/attachments/drawing_12.png\" /></p> <p>Next: [[Center of Gravity]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The _About To_ Pose.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "The _About To_ Pose.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/The _About To_ Pose.md","content": "<p>There are hundreds of different configurations for the creation of a pose, and each one is governed by the desired effect and context of a given story. The following exercise will help you create a sense of impending action, and is an exercise I generally give to students who are stuck making stiff symmetrical positions. While this exercise isn&rsquo;t the solution to how every pose should be thought through, it is one tool to use when thinking about the mechanics of the figure, and how these mechanics can be used.</p> <p>Stiff, symmetrical poses, while good for suggestion of power, strength and/or immobility, often lack a sense of lyricism and exaggeration. In an effort to push towards these more dynamic attributes in a pose, I ask my students to strive to create an &ldquo;about to&hellip;&rdquo; <em>quality</em>, which is a pose or position in their drawing that is <strong>somewhere in mid-action, mid-step</strong>, etc.</p> <p>Stable, symmetrical ositions kee the action in stasis; the action has either not begun, or it has ended. An &ldquo;about to&hellip;&rdquo; position engages viewers by making them anticipate the outcome of the action, hopefully wanting to fill in the rest of the story.</p> <p><img alt=\"drawing_16.png\" src=\"public/attachments/drawing_16.png\" /></p> <p>The difference between a stable pose and one in mid-action is determined by how weight is distributed and balanced. WHile this approach can be used to analyze most positions, here it is demonstrated with the standing figure.</p> <p>Keeping in mind the prior notes on the [[Center of Gravity]], build a triangle between the feet and either the belly button or nose. In poses that are very stable, the triangle mostly appears very stable at the bottom. <br /> Notice that in exaggerated positions, or out of balance poses, the triangle looks more irregular.</p> <p><img alt=\"drawing_17.png\" src=\"public/attachments/drawing_17.png\" /></p> <p>Next: [[Economy of line]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Wrapping Lines.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Wrapping Lines.md","path": "Other/Drawing/Design And Invention/Gesture Drawing/Wrapping Lines.md","content": "<p>The last type of curve used in gesture drawing is wrapping lines. In a quick sketch, wrapping lines are curves that move across and around a form to indicate perspective.</p> <p><img alt=\"drawing_5.png\" src=\"public/attachments/drawing_5.png\" /></p> <p>After using wrapping lines, the last step in creating a gesture drawing is to include the shapes of the head, rib cage and pelvis.</p> <p>When doing this, keep in mind that including these shapes will be a powerful tool in showing proportion, weight, and balance. At this point, keep the shape of the head very simple as a sphere. The rib cage should be shown as a conservative egg-shape that is standing up, while the pelvis is an oval laying on its side.</p> <blockquote> <p>[!Tip]<br /> Try to think of wrapping lines as rubber bands or string tied all the way around a form. The point of this exercise is to never draw a straight line across your drawing. From now on, only use lines that travel around an imagined surface. This will develop a short hand of form/perspective for you and for the viewer.</p> <p>(all of the wrapping lines are <strong>volumetric</strong> contours, or lines that travel across the surface of a form from side to side)</p> </blockquote> <p>Next: [[The Spine]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Head Drawing',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Step 1, 2 and 3.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Step 1, 2 and 3.md","path": "Other/Drawing/Design And Invention/Head Drawing/Step 1, 2 and 3.md","content": "<h1>Step 1 - The Sphere</h1> <p>The sphere represents the cranial mass, which is 2/3 of the entire skull.</p> <p>When drawing the head, continue to use the same process outlined in the first two chapters. Begin with broad 2D ideias of position, orientation, and placement, <strong>then</strong> build into perspective, and finally construct the details on top of those developed surfaces. </p> <h1>Step 2 - The Tilt</h1> <p><img alt=\"drawing_33.png\" src=\"public/attachments/drawing_33.png\" /></p> <h1>Step 3 - Adding the Jaw</h1> <p>This step introduces the shape of the jaw back onto the cranial mass.</p> <p><img alt=\"drawing_34.png\" src=\"public/attachments/drawing_34.png\" /></p> <p>The shapeof the jaw is formed by extending the lines of the cranial mass down to give the skull an overall egg shape.</p> <p>The areas in these diagrams show the shape of the jaw from a front, three-quarter, and a profile view. Observe how, with only shapes, the placement of the jaw starts to suggest a 3D look or position in space.</p> <blockquote> <p>[!Tip]<br /> The addition of the jaw will represent the remaining 1/3 of the skull, unless otherwise changed for exaggeration in character, animal or creature.</p> </blockquote> <p>At this stage, you should be focused on using the jaw, indicated with a straight, horizontal line for the chin, to show a complete turn. This involves an awareness of the symmetrical view, and what happens to the chin-line as the head turns right or left (shown in orange).</p> <p>Next: [[Step 4 - Perspective]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Step 4 - Perspective.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Step 4 - Perspective.md","path": "Other/Drawing/Design And Invention/Head Drawing/Step 4 - Perspective.md","content": "<p>This step introduces perspective into your drawing. Before this point, everything has been organized through the use of shape to arrange the placement of the larger forms. Perspective is now added to create the illusion of three dimensions.</p> <p>The first step in deciding on a perspective is to simply <strong>determine whether you are underneath (A) or above (B)</strong> the head. Illustration A shows what a head looks like when seen from underneath. Note that the &ldquo;t&rdquo; has changed - it now tilts back across the face. </p> <p>To the right, note that this perspective is simplified by the cylinder. When wrapping the &ldquo;4&rdquo; across the cranial mass, always draw through and around that sphere as if it were made of glass. The dotted lines on the drawing show how this appears. It is important that this line bisects the sphere at its equatorial center — think of this line traveling around the sphere like the line of the equator traverses the surface of the earth.</p> <p><img alt=\"drawing_35.png\" src=\"public/attachments/drawing_35.png\" /></p> <p>The two drawings in the center show how to easily place this &ldquo;t&rdquo; or eye line. By relating the eye line to the brow and top of the ear, you will more accurately describe the perspective angle.</p> <p>Illustration B shows the head seen from above. The cylinder to the right of the head shows how all the line work is still geared toward describing a basic perspective idea.</p> <p>Examples:</p> <p><img alt=\"drawing_36.png\" src=\"public/attachments/drawing_36.png\" /></p> <p>Next: [[Step 5 - Proportions]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Step 5 - Proportions.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Step 5 - Proportions.md","path": "Other/Drawing/Design And Invention/Head Drawing/Step 5 - Proportions.md","content": "<p>The placement of the smaller forms can be established by setting proportions.</p> <p><img alt=\"drawing_37.png\" src=\"public/attachments/drawing_37.png\" /></p> <p><img alt=\"drawing_38.png\" src=\"public/attachments/drawing_38.png\" /></p> <p>Next: [[Step 6 - Side Plane]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Step 6 - Side Plane.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Step 6 - Side Plane.md","path": "Other/Drawing/Design And Invention/Head Drawing/Step 6 - Side Plane.md","content": "<p><img alt=\"drawing_39.png\" src=\"public/attachments/drawing_39.png\" /></p> <p>This step begins with finding the hairline and drawing it in perspective all the way around to the back of the skull. </p> <p>Next, beginning <strong>from the base of the nose</strong>, draw another line back across the form to the back of the skull. </p> <p>Between the back of the skull, the top of the line drawn from the hairline, the outside of the brow, and the line drawn from the base of the nose, draw an ellipse to represent the side plane of the skull. These four points are always used to find this side plane; however, the orientation and the size of the ellipse will change depending on the perspective. </p> <p>This is the most important stage in giving the head a 3-D appearance. In a very simple way, the box (top right of the illustration) describes what is beginning to take place on the skull. </p> <p><strong>Between the four points mentioned above, draw two straight lines connecting them. One should be horizontal going from the back of the skull to the end of the brow, the other should be drawn from the line at the base of the nose to the top line at the hairline. During this step, keep the vertical line as close to matching the line of the tilt (step 2) as possible.</strong></p> <p>Next: [[Step 7 - The Ear]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Step 7 - The Ear.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Step 7 - The Ear.md","path": "Other/Drawing/Design And Invention/Head Drawing/Step 7 - The Ear.md","content": "<p>This step begins by placing the ear. The ear sits in the lower quarter, created by drawing the horizontal and vertical divisions in step 6. As shown in dark blue, the ear should be kept as a simple &ldquo;C&rdquo; shape that is <strong>no taller than the base of the nose to the line of the brow</strong>.</p> <p>The second part of this step is to find the line of the cheek. As shown in dark blue, the line of the cheekbone begins at the top of the ear and continues as a &ldquo;C&rdquo; curve down to the corner of the jaw. The inclusion of the cheekbone adds another corner showing the front plane of the face, and now side plane for the jaw.</p> <p><img alt=\"drawing_40.png\" src=\"public/attachments/drawing_40.png\" /></p> <p><img alt=\"drawing_42.png\" src=\"public/attachments/drawing_42.png\" /></p> <p>Next: [[Step 8 - The Keystone]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Step 8 - The Keystone.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Step 8 - The Keystone.md","path": "Other/Drawing/Design And Invention/Head Drawing/Step 8 - The Keystone.md","content": "<p>This step begins by finding the recessive plane for the eye sockets (shown with orange dots). It is important to show that the plane for the sockets pushes into the skull at an angle. Also note that all four dots are connected to show one plane that begins at the brow line and ends at the proportion line for the bottom of the sockets. This plane does not go past the cut-out for the side plane of the head.</p> <p><img alt=\"drawing_41.png\" src=\"public/attachments/drawing_41.png\" /></p> <p>From the tip of the nose, at either end, two lines are drawn down to connect it to the base. You should now have one plane, which represents the bottom plane of the nose. The next step (above right) is to draw two straight lines from the tip of the nose (pink dots) to the ends of the keystone shape above (orange dots). This form gives you the front plane for the bridge of the nose. </p> <p>To complete this structure, drop a line from the point at the keystone (orange dots) to the line for the bottom of the sockets (green dot) at about the same angle as was used for the side of the base of the nose. After connecting this again to the base of the nose (connect green dot to pink), you have the side plane of the nose drawn to proportion, accurately placed on a believable perspective-based form.</p> <p>Examples: </p> <p><img alt=\"drawing_43.png\" src=\"public/attachments/drawing_43.png\" /></p> <p><img alt=\"drawing_44.png\" src=\"public/attachments/drawing_44.png\" /></p> <p><img alt=\"drawing_45.png\" src=\"public/attachments/drawing_45.png\" /></p> <p>Next: [[Step 9 - Denture Sphere]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Step 9 - Denture Sphere.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Step 9 - Denture Sphere.md","path": "Other/Drawing/Design And Invention/Head Drawing/Step 9 - Denture Sphere.md","content": "<p>This step involves developing the area of the tooth cylinder or denture sphere. This area of bone, which includes the teeth, pushes out and away from the face. This is the main characteristic of the lower portion of the face to develop before drawing the lips.</p> <p>The denture sphere is an oval. This oval is drawn from the top of the chin up underneath the area of the nose.</p> <p><img alt=\"drawing_46.png\" src=\"public/attachments/drawing_46.png\" /></p> <p><img alt=\"drawing_47.png\" src=\"public/attachments/drawing_47.png\" /></p> <h1>Completed Line Drawing</h1> <p>This is an example of how your completed line drawing should look. Before moving on to any finishing work on the character or head, make sure there is a fundamental development of the basic forms. These forms are what give your drawings the feeling of <strong>believability, naturalism, and volume</strong>.</p> <p><img alt=\"drawing_48.png\" src=\"public/attachments/drawing_48.png\" /></p> <p><img alt=\"drawing_49.png\" src=\"public/attachments/drawing_49.png\" /></p> <p><img alt=\"drawing_50.png\" src=\"public/attachments/drawing_50.png\" /></p> <p>Notice that the forms of the face are in a balancing act, alternating between a form projecting out an a form receding in. For example, the forehead pushes out, the eye sockets recede, the nose pushes forward, etc. </p> <p><img alt=\"drawing_51.png\" src=\"public/attachments/drawing_51.png\" /></p> <h1>The back of the head</h1> <p>Similar to the profile, the back of the head also offers a unique set of problems. However, you will always begin with the first four major steps. Having set the placement up, the design for the back of the head is one predominately structured on the &ldquo;T&rdquo; overlap. The forms you are looking to overlap in this position (the anatomical forms will be discussed in the following chapter) are the Trapezius (1), the form of the neck (2), the sternocleidomastoid (3), the cranial mass (4), and ear (5). Simplify your drawing of the back of the head into an organization of these major forms.</p> <p><img alt=\"drawing_52.png\" src=\"public/attachments/drawing_52.png\" /></p> <hr /> <p><img alt=\"drawing_53.png\" src=\"public/attachments/drawing_53.png\" /><br /> <img alt=\"drawing_56.png\" src=\"public/attachments/drawing_56.png\" /></p> <p>Next: [[Introduction to Anatomy]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Landmarks',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Arms and Legs.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Arms and Legs.md","path": "Other/Drawing/Design And Invention/Landmarks/Arms and Legs.md","content": "<p><img alt=\"drawing_29.png\" src=\"public/attachments/drawing_29.png\" /></p> <p>When developing the arms, one of the most difficult steps is showing the correct perspective. The four stacked drawings bellow show to process for developing the arm as a cylinder.</p> <p><img alt=\"drawing_30.png|250\" src=\"public/attachments/drawing_30.png|250\" /></p> <p>The first step is to use one line to place the direction and length of the arm.<br /> In the second step, draw two lines parallel to the first to determine the width of the cylinder.<br /> The third step is to give the cylinder a perspective based on the type of ellipse drawn.</p> <p><img alt=\"drawing_31.png\" src=\"public/attachments/drawing_31.png\" /><br /> Examples:</p> <p><img alt=\"drawing_32.png\" src=\"public/attachments/drawing_32.png\" /></p> <p>Next: [[Step 1, 2 and 3]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Connections.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Connections.md","path": "Other/Drawing/Design And Invention/Landmarks/Connections.md","content": "<p>Having established the skeletal landmarks and figure in perspective, the next step deals with the connection and design of these forms.</p> <p>Connections are important areas in the figure to emphasize curves that play off of the harder shapes of bone. This maintains and exaggerates ideas of natural balance discussed in the gesture chapter.</p> <p><img alt=\"drawing_28.png\" src=\"public/attachments/drawing_28.png\" /></p> <p>Next: [[Arms and Legs]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Rib Cage, Pelvis and the Back.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Rib Cage, Pelvis and the Back.md","path": "Other/Drawing/Design And Invention/Landmarks/Rib Cage, Pelvis and the Back.md","content": "<p>The skeleton can be used to look at the figure symmetrically. In a full-frontal or back view, a line down the center of the skeleton splits the figure into two equal halves. <strong>Landmarks</strong> give us this line of symmetry.</p> <p>All of the following landmarks are areas of bone that visibly push through the flesh. For the time being, we are concerned with the landmarks of the rib cage and  pelvis. Keep in mind that these are simplified designs based on knowledge of the skeleton.</p> <p><img alt=\"drawing_20.png\" src=\"public/attachments/drawing_20.png\" /><br /> <img alt=\"drawing_21.png\" src=\"public/attachments/drawing_21.png\" /><br /> <img alt=\"drawing_22.png\" src=\"public/attachments/drawing_22.png\" /><br /> Examples B, C, and D show the positions of the landmarks as the figure starts to move through space. Notice that the line of symmetry on the three-quarter, side, and three-quarter back has remained, but now begins to favor, or move closer to, one side of the figure.<br /> Where the line of symmetry had previously divided the figure into two equal parts, now it helps to align the shape of the landmarks and show a turn. As the flat view becomes a slightly angled view, the rib cage and pelvis are shown with an interior corner. This interior corner will be used to show the perspective by allowing the rib cage and pelvis to be turned into a box.</p> <blockquote> <p>[!Tip]<br /> The line of symmetry will always be a &ldquo;C&rdquo; curve when the rib cage and pelvis are facing the same direction. When the rib cage and pelvis are twisting, the line of symmetry will always be an &ldquo;S&rdquo; curve.</p> </blockquote> <p>Next: [[Volume]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Volume.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Volume.md","path": "Other/Drawing/Design And Invention/Landmarks/Volume.md","content": "<p>This diagram details the process of how to use your knowledge of the landmarks to show volume.</p> <p><img alt=\"drawing_23.png\" src=\"public/attachments/drawing_23.png\" /><br /> <img alt=\"drawing_24.png\" src=\"public/attachments/drawing_24.png\" /></p> <blockquote> <p>[!Tip]<br /> If the line of symmetry is approaching one side of the figure, it means the side plane (of the perspectival box) is on the opposite side of the figure.</p> </blockquote> <p><img alt=\"drawing_25.png\" src=\"public/attachments/drawing_25.png\" /><br /> <img alt=\"drawing_26.png\" src=\"public/attachments/drawing_26.png\" /></p> <p>Next: [[Weight Distribution]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Weight Distribution.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Weight Distribution.md","path": "Other/Drawing/Design And Invention/Landmarks/Weight Distribution.md","content": "<p>It is easier to determine how to handle areas of intersection by thinking of the figure mechanically. Sometimes doing a small/ simplified sketch of weight-distribution and balance before you begin your drawing can help solve problems at a very early stage.</p> <p><img alt=\"drawing_27.png\" src=\"public/attachments/drawing_27.png\" /></p> <p>Next: [[Connections]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'The Arm',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Anatomy of the arm.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Anatomy of the arm.md","path": "Other/Drawing/Design And Invention/The Arm/Anatomy of the arm.md","content": "<p><img alt=\"drawing_110.png\" src=\"public/attachments/drawing_110.png\" /><br /> <img alt=\"drawing_111.png\" src=\"public/attachments/drawing_111.png\" /></p> <p>Next: [[The Forearm]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The Arm.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "The Arm.md","path": "Other/Drawing/Design And Invention/The Arm/The Arm.md","content": "<p>When drawing the arm, the first thing to consider is its relationship with the large form of the rib cage. The structure of the shoulder girdle, introduced in the anatomy of the upper torso, should serve as the transitional form between the rib cage and the arm.</p> <p>[[The Shoulder]]<br /> [[Anatomy of the arm]]<br /> [[The Forearm]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The Forearm.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "The Forearm.md","path": "Other/Drawing/Design And Invention/The Arm/The Forearm.md","content": "<p>The forearm is an incredibly complex weaving of anatomy that will ultimately deserve more time and study than given here. This approach highlights a working process and should under no condition be used as an anatomy reference. I highly recommend that this approach be supplemented with addictional anatomical texts.</p> <p>When drawing the forearm, the first, most importante step is to determine the location of the radius and ulna during pronation and supination. The ulna remains static, connected to the humerus by a hinge joint, while the radius rotates around the ulna.</p> <p><img alt=\"drawing_112.png\" src=\"public/attachments/drawing_112.png\" /></p> <p>Notice that the radius and ulna are similar in shape: both are elongated triangles.</p> <p>The ulna is wider at the top, as it fits into the humerus, and smaller towards the wrist. The ulna always appears on the pinky-finger side of the wrist.</p> <p><img alt=\"drawing_113.png\" src=\"public/attachments/drawing_113.png\" /></p> <p>The radius is opposite in shape of the ulna: a triangle that is flat at the bottom and skinny at the top. The radius always appears on the thumb-side of the wrist.</p> <p><img alt=\"drawing_114.png\" src=\"public/attachments/drawing_114.png\" /><br />  The design of the forearm can be reduced into three basic shapes/ ellipses: the flexors, extensors, and ridge muscles. While we will add to these three, these are the major shapes to focus on. </p> <p><img alt=\"drawing_115.png\" src=\"public/attachments/drawing_115.png\" /><br /> <img alt=\"drawing_116.png\" src=\"public/attachments/drawing_116.png\" /><br /> <img alt=\"drawing_117.png\" src=\"public/attachments/drawing_117.png\" /><br /> <img alt=\"drawing_118.png\" src=\"public/attachments/drawing_118.png\" /></p> <p>Successful understanding of the forearm&rsquo;s anatomy will help you decipt pronation and supination of the arm.</p> <p>In pronation, the radius crosses over the ulna. In terms of anatomy, pronation involves the pronator teres, pronator quadratus and flexor carpi radicalis.</p> <p>In supination, the bones of the radius and ulna lie parallel to one another. Supination is more powerful than pronation. Supination involves the biceps brachii and supinator.</p> <p><img alt=\"drawing_119.png\" src=\"public/attachments/drawing_119.png\" /></p> <h1>Process</h1> <p>When working on the arm itself, it is again very important to follow a process. This process will help you organize the most important qualities first, and will aid in invention.</p> <ol> <li> <p>To start the arm, it is first most important to position/work out the gesture. On top of the more lyrical, overall gesture, place a straight line to give a strong feeling on the bones as well as 2-D position.</p> </li> <li> <p>Second, build your perspectives on top of the straight. These cylinders are the most important element to provide a believable sense of space and form. The anatomy will need to be wrapped around these sylinders using the two main ideas of transitional volumes.</p> </li> <li> <p>Place the asymmetrical design of the anatomy of the arm on top of the cylinders.</p> </li> </ol> <p><img alt=\"drawing_120.png\" src=\"public/attachments/drawing_120.png\" /><br /> <img alt=\"drawing_121.png\" src=\"public/attachments/drawing_121.png\" /><br /> <img alt=\"drawing_122.png\" src=\"public/attachments/drawing_122.png\" /><br /> <img alt=\"drawing_123.png\" src=\"public/attachments/drawing_123.png\" /><br /> <img alt=\"drawing_124.png\" src=\"public/attachments/drawing_124.png\" /><br /> <img alt=\"drawing_125.png\" src=\"public/attachments/drawing_125.png\" /><br /> <img alt=\"drawing_126.png\" src=\"public/attachments/drawing_126.png\" /><br /> <img alt=\"drawing_127.png\" src=\"public/attachments/drawing_127.png\" /><br /> <img alt=\"drawing_128.png\" src=\"public/attachments/drawing_128.png\" /></p> <p>Next: [[The Hand]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The Shoulder.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "The Shoulder.md","path": "Other/Drawing/Design And Invention/The Arm/The Shoulder.md","content": "<p>The shoulder girdle is a perspectival unit made up of the clavicle (front) and scapula (back). The importance of having a separate form for these bones is to allow them to move independently of the rib cage, as well as adding panar elements. When working with the arms, first pay attention to the development and placement of the shoulder&rsquo;s perspective. Think of this structure as being similar to the shoulder pads worn by football players.</p> <p><img alt=\"drawing_104.png\" src=\"public/attachments/drawing_104.png\" /></p> <p><img alt=\"drawing_105.png\" src=\"public/attachments/drawing_105.png\" /><br /> <img alt=\"drawing_106.png\" src=\"public/attachments/drawing_106.png\" /><br /> <img alt=\"drawing_107.png\" src=\"public/attachments/drawing_107.png\" /></p> <p>Above is a diagram that gives a process for drawing the arms and legs. This is similar to the anatomy and motion diagram in the previous chapter. This process should look very familiar by now, as it is the same one used for just about everything so far. If you are having difficulty in your drawings, return to this process and double-check your approach. If you notice your drawings are weak in a specific step, focus all your practice time on improving that one area. The challenge in drawing the arms and legs is that all the anatomical shapes are essentially spheres or ellipses, and that they need to be developed on top of a difficult, complex surface (the cylinder).</p> <p><img alt=\"drawing_108.png\" src=\"public/attachments/drawing_108.png\" /><br /> <img alt=\"drawing_109.png\" src=\"public/attachments/drawing_109.png\" /></p> <p>Next: [[Anatomy of the arm]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'The Hand',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Finger Bones and Knuckels.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Finger Bones and Knuckels.md","path": "Other/Drawing/Design And Invention/The Hand/Finger Bones and Knuckels.md","content": "<p>The drawing below  shows a breakdown of the bones and knuckles in the finger. Notice that the shape of the knuckles resembles a thimble that has been compressed in the middle. This design allows for the tendon on top of the hand to sit in a groove in the center of the knuckle as it continues toward the fingertip.</p> <p><img alt=\"drawing_135.png\" src=\"public/attachments/drawing_135.png\" /></p> <p>Simplified version:<br /> <img alt=\"drawing_136.png\" src=\"public/attachments/drawing_136.png\" /></p> <p>Next: [[The whole process]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Hand Anatomy.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Hand Anatomy.md","path": "Other/Drawing/Design And Invention/The Hand/Hand Anatomy.md","content": "<p>In addition to being familiar with the hand&rsquo;s skeletal structure, understanding the anatomy of the hand will contribute to an understanding of gesture and volume. The anatomy shown below represents a simplified understanding of the major muscle groups shown in the hand. Remember, this is meant to aid in the development of a working process. An in-depth study of anatomy requires additional resources.</p> <p><img alt=\"drawing_133.png\" src=\"public/attachments/drawing_133.png\" /></p> <p>The upper portion of the hand is primarily dominated by bone, whereas the palm is fleshy. The diagram shows a side view (to the left) and a back or palm view (to the right).</p> <p><img alt=\"drawing_170.png\" src=\"public/attachments/drawing_170.png\" /></p> <p><img alt=\"drawing_171.png\" src=\"public/attachments/drawing_171.png\" /><br /> <img alt=\"drawing_172.png\" src=\"public/attachments/drawing_172.png\" /><br /> <img alt=\"drawing_173.png\" src=\"public/attachments/drawing_173.png\" /><br /> <img alt=\"drawing_174.png\" src=\"public/attachments/drawing_174.png\" /><br /> <img alt=\"drawing_175.png\" src=\"public/attachments/drawing_175.png\" /><br /> <img alt=\"drawing_176.png\" src=\"public/attachments/drawing_176.png\" /><br /> <img alt=\"drawing_177.png\" src=\"public/attachments/drawing_177.png\" /><br /> <img alt=\"drawing_178.png\" src=\"public/attachments/drawing_178.png\" /><br /> <img alt=\"drawing_179.png\" src=\"public/attachments/drawing_179.png\" /><br /> <img alt=\"drawing_180.png\" src=\"public/attachments/drawing_180.png\" /><br /> <img alt=\"drawing_181.png\" src=\"public/attachments/drawing_181.png\" /></p> <p>Next: [[Perspective of the Hand]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Hand structure and proportion.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Hand structure and proportion.md","path": "Other/Drawing/Design And Invention/The Hand/Hand structure and proportion.md","content": "<p>The hand is primarily made up of three groups of bones: the carpus group, the metacarpus (the bones of the palm), and the phalanges (the bones of the fingers).</p> <p>The drawing below is a diagram of the bones in the hand. The circle shown near the top of the hand represents the carpus group. The carpus group is a collection of eight bones organized in a brige-like form.</p> <p><img alt=\"drawing_129.png\" src=\"public/attachments/drawing_129.png\" /></p> <p>The diagram below shows this bridge seen as if the fingers were pointing directly at you. The carpus group is carried through every stage of the hand drawing. This area, and shape shown below, are the design theme for the hand. Because the shape of the hand is dependent on this form for its effective use and function, you should integrate its effects into your depiction of the hand at every stage, from proportion to the design of perspectives.</p> <p><img alt=\"drawing_130.png\" src=\"public/attachments/drawing_130.png\" /></p> <p>Note that the wrapping line drawn over the carpus group (orange circle) suggests an apex or high point to the form. Because of the bridgelike quality of the carpus group, a vacancy is created beneath. This area is known as the carpal tunnel, and is occupied by tendons that branch out into the fingers.</p> <p>The diagram bellow shows the proportional relationship between these groups. That oval is split at half-way point to represent the end of the metacarpals (knucles.<br /> The upper half of the hand is made up of one-third carpus group and two thirds metacarpals. The lower half of the hand is made up entirely of the fingers/ phalanges.</p> <p><img alt=\"drawing_131.png\" src=\"public/attachments/drawing_131.png\" /></p> <p><img alt=\"drawing_132.png\" src=\"public/attachments/drawing_132.png\" /></p> <p>The bones in the fingers are proportionally-based on a 3:2 ratio. The diagram above shows the relationship between the three bones in the finger: the proximal (closest to the palm), middle, and distal (furthest bone or tip of the finger) phalanx.</p> <p>Note that the proximal phalanx as a whole (shown in orange) has been broken into three sections. Two of these sections are shown in blue. These two parts are the length of the next bone, the middle phalanx. The same approach is then applied to the middle phalanx: the overall length (shown in blue) is broken into three equal parts. Two of these three parts (shown in purple) are the length of the last bone in the fingrt, the distal phalanx.</p> <p>Next: [[Hand Anatomy]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Perspective of the Hand.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "Perspective of the Hand.md","path": "Other/Drawing/Design And Invention/The Hand/Perspective of the Hand.md","content": "<p><img alt=\"drawing_134.png\" src=\"public/attachments/drawing_134.png\" /></p> <p>Next: [[Finger Bones and Knuckels]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The Hand.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "The Hand.md","path": "Other/Drawing/Design And Invention/The Hand/The Hand.md","content": "<p>When drawing the hand, you will follow a similar process to the one used when drawing at the head, and this same process will again be used again when looking at the foot in a future chapter. </p> <p>To review, you will begin by looking at the skeleton, proportion, and anatomy, in order to develop designs that can be effective in the process of drawing. Next, take those informed designs and render them with variations of the box, cylinder, and sphere in order to create a believable effect of space. Finally, you should create contours that can be worked over the forms to present a more organic description.</p> <p>Next: [[Hand structure and proportion]]</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The whole process.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "The whole process.md","path": "Other/Drawing/Design And Invention/The Hand/The whole process.md","content": "<h1>The finger</h1> <p>The diagram below shows how to put all of this information into a manageable process.</p> <p><img alt=\"drawing_137.png\" src=\"public/attachments/drawing_137.png\" /></p> <p>The first step shows the placement of the knuckles and bones only using the spheres and straights. This first step focuses on placement and proportion. </p> <p>The second step builds upon the first by assigning each finger a perspective using the cylinder and the “T” overlaps. </p> <p>The last step focuses on designing the finger, building on the previous steps. The underside of the finger has been drawn only using &ldquo;C&rdquo; curves. A &ldquo;C&rdquo; is drawn from the back of one sphere to the center of the next (this curve changes depending on whether or not the finger is pinched). Study the drawing below to see how all of the stages have been used to reach a well-constructed, informed drawing.</p> <p><img alt=\"drawing_138.png\" src=\"public/attachments/drawing_138.png\" /><br /> <img alt=\"drawing_139.png\" src=\"public/attachments/drawing_139.png\" /></p> <h1>The Hand</h1> <p>The hand is always placed first using the &ldquo;S&rdquo; curves to describe the width of the radius and the ulna and the movement into the middle three fingers. A &ldquo;S&rdquo; or &ldquo;C&rdquo; can be used to start depending on how the hand is moving in relation to the wrist.</p> <p><img alt=\"drawing_141.png\" src=\"public/attachments/drawing_141.png\" /></p> <p>In the second step, a &ldquo;C&rdquo; curve is used to place where the fingers end. It is important to use a curve at this stage to begin developing the shape of the carpus group. Because the hand is based off of the carpus group, everything relates using curves. The fingertips and knuckles will always line up on a curve or arc. The curve used in this step shows this important element while creating a glove-like shape that places the overall position of the hand.</p> <p><img alt=\"drawing_142.png\" src=\"public/attachments/drawing_142.png\" /></p> <p><img alt=\"drawing_143.png\" src=\"public/attachments/drawing_143.png\" /></p>"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Other',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Drawing the effect of detail, not the exact detail.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Drawing the effect of detail, not the exact detail.md","path": "Other/Drawing/Other/Drawing the effect of detail, not the exact detail.md","content": "<h2>Drawing the effect of detail, not the exact detail</h2> <ul> <li>make it easy for people looking at a complex scene to know what&rsquo;s happening, what&rsquo;s going on -&gt; make sure that a few of the objects are easy to see and easy to recognize (reasonably sized, without much room for confusion in them or around them -&gt; hightlight the shape)</li> <li>silhouettes are important</li> <li>make it easy to attach meaning to</li> <li>dark shadows as a path for the eyes to follow</li> <li>further away -&gt; lines are  thiner, softer and more gestural; darker on what&rsquo;s closer</li> <li>do not feel every gap equally, make it random</li> <li>what are the thing&rsquo;s that stand out? how and why?</li> <li>negative space (drawing the space between things)</li> </ul> <p><img alt=\"\" src=\"https://i.imgur.com/UsBLNMA.png\" /></p>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Links.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Links.md","path": "Other/Drawing/Other/Links.md","content": "<ul> <li><a href=\"https://quickposes.com/en\">Quick poses</a></li> <li><a href=\"https://www.characterdesigns.com/\">Character designs</a></li> <li><a href=\"https://line-of-action.com/\">Line of Action</a></li> <li><a href=\"http://reference.sketchdaily.net/en\">Sketch Daily</a></li> <li><a href=\"https://www.bodiesinmotion.photo/quick-draw\">Bodies in Motion</a></li> </ul>"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Sungmoo Heo',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: '01.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "01.pdf","path": "Other/Drawing/Sungmoo Heo/01.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: '02.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "02.pdf","path": "Other/Drawing/Sungmoo Heo/02.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Urban Sketching',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Composition _ the Gradient of Interest.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Composition _ the Gradient of Interest.md","path": "Other/Drawing/Urban Sketching/Composition _ the Gradient of Interest.md","content": "<p>All of the elements that attract the eye, the highest detail and greatest contrast, should be combined at the compositional focal point and fade away smoothly towards the edges. Whatever aspect of the sketch is most important to you needs the greatest intensity of these three factors: placement, contrast and detail.  </p> <p>In a larger drawing there may be secondary or tertiary areas of interest, which lead the viewer like a trail of bread crumbs. But none should be powerful enough to compete with the gravity of the focal point.</p> <p><img alt=\"u15.png\" src=\"public/attachments/u15.png\" /></p> <p><img alt=\"u16.png\" src=\"public/attachments/u16.png\" /></p> <p>Next:</p> <h1>drawing</h1>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Drawing from the Outside In.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Drawing from the Outside In.md","path": "Other/Drawing/Urban Sketching/Drawing from the Outside In.md","content": "<p>The idea is to work larger-to-smaller, establishing the big shapes before investing time on the details. It&rsquo;s a very fast way to sketch. A lot of problems with these outside shapes can be solved by doing corrections when things are still simple outlines.</p> <h2>Sight measuring and angle checking</h2> <p><img alt=\"u1.png\" src=\"public/attachments/u1.png\" /></p> <ol> <li>Decide roughly how large you want the sketch on the page. Mark a small dash at the top and the bottom of your subject and lightly sketch a scribble of the outside shape. Don&rsquo;t add internal detail, just focus on the silhoutte, as if it was cut out of a piece of paper.</li> </ol> <p><img alt=\"u2.png\" src=\"public/attachments/u2.png\" /></p> <ol start=\"2\"> <li>As you look at the subject, extend your arm straight (elbow locked), and line up the tip of your pencil with the top of the subject. Slide your thumb down until it’s lined up with the base. That position you’ve marked on your brush or pencil—that is a unit measure you can use to check against other objects. (Line A).Keep your thumb in position on the pencil to preserve the measurement you have marked. Keep your elbow locked to maintain the same distance from the subject. Don’t move your feet either. If you step back, the scale of everything will change. Look for something you can compare your measurement against. It so happens that the height of the jar is equal to the width across the three cups. (Line A = Line B). This gives us something we can check in our drawing. There won’t always be a perfect match. Sometimes you’ll have to estimate.</li> </ol> <p><img alt=\"u3.png\" src=\"public/attachments/u3.png\" /></p> <ol start=\"3\"> <li>Now compare the height and width of the sketch—oops! The drawing is not correct. See how we have caught that error with this simple measuring trick. This is a pretty small error, which can be fixed by refining the sketch. Make the fix to the silhouette so that the jar height (A) matches the cup width (B). Sketch in the dividing line between the dark ceramic base and the upper patterned area. This is  what is meant by working larger-to-smaller. Once you have the outside shape, what is the next biggest thing you can draw? The waist of the bottle is the next-largest shape, dividing the jar in half.</li> </ol> <p><img alt=\"u4.png\" src=\"public/attachments/u4.png\" /></p> <ol start=\"4\"> <li>The next kind of measurement is what I call an angle check. It’s is ideal for finding roof lines, or check-ing perspective on narrowing city streets. Measure the slope between two points. Place the base of the pencil on the first point, (the edge of the cup) holding the pencil vertically, then rotate the tip until it lines up with your second point (the lip of the jar). Now lock your wrist. Don’t move the angle of the pencil. Simply place it over your drawing and see how well the angle lines up with what you’ve drawn. It’s looking reasonably close after widening those cups.</li> </ol> <p><img alt=\"u5.png\" src=\"public/attachments/u5.png\" /></p> <ol start=\"5\"> <li>The blue lines are the original scribble. See how far out it was at first? Now that you’ve confirmed the silhouette, you can kick back and have fun. By starting outside-in, you can see for certain that you have a shape you like before you get into those details. Freely scribble in the pattern. Don’t stiffen up while doing it. You wouldn’t feel as free if you weren’t sure about the underlying structure, and it wouldn’t turn out as loose and sketchy as you want. Oddly, it’s the measuring that allows the sketch to look spontaneous. Many artists use the saying, “Loose is how a drawing looks, not how it’s made.“</li> </ol> <p><img alt=\"u6.png\" src=\"public/attachments/u6.png\" /></p> <ul> <li>Finished drawing<br /> <img alt=\"u7.png\" src=\"public/attachments/u7.png\" /></li> </ul> <p>Next: [[Simple Measurements, Complex Shapes]]</p> <h1>drawing</h1>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Getting started as a Daily Sketcher.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Getting started as a Daily Sketcher.md","path": "Other/Drawing/Urban Sketching/Getting started as a Daily Sketcher.md","content": "<ul> <li> <p>Take your suplies everywhere: <br /> For an entire month, don’t leave the house without taking along some simple drawing supplies</p> </li> <li> <p>Draw Constantly:<br /> Start and keep the habit of drawing every time you feel the inclination. Draw in every stolen moment, using all of life’s little delays as bonus time. This is the best and easiest thing you can do to succeed as an urban sketcher.</p> </li> <li> <p>Go easy on yourself<br /> This is the most important thing. Don’t  judge your sketches in any way. Every<br /> sketch is a good sketch. Just keep doing  them. You don’t even have to show any- one. Judge your progress only by how many pages you fill. The result doesn’t matter—only the act of drawing—the fact you put pen to paper and made a mark that day.</p> </li> </ul> <blockquote> <p>If you can turn off your internal<br /> critic and judge yourself only by quan-<br /> tity, you will have discovered the true<br /> path to mastery.</p> </blockquote> <ul> <li> <p>Find Subjects All Around You<br /> Indulge yourself by sketching anything that catches your fancy. If you’re a commuter, take out your sketchbook instead of your phone. If you work in an office, you can probably steal a few minutes to look out of a window and do a quick sketch. If you’re a smoker, well then, you have plenty of opportunity.<br /> If you watch TV or play video games, hit pause and sketch what you see on the screen.</p> </li> <li> <p>Fill A Sketchbook in a Month<br /> If you can keep this state of mind of recording everything, treating it like a kind of diary, you can finish a small sketch-book in a month. After you fill your first book, congratulate yourself. Then immediately start another.</p> </li> </ul> <p>Next: [[Drawing from the Outside In]]</p> <h1>drawing</h1>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Minimalist Scribbling.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Minimalist Scribbling.md","path": "Other/Drawing/Urban Sketching/Minimalist Scribbling.md","content": "<p>This exercise will help re-enforce the idea of the scribble as information gathering and analysis, as opposed to the calligraphic line as the artistic expression. You never want the ink line to feel like busy work. It shouldn&rsquo;t be a chore to refine in ink on top of your scribble. Never approach it like you&rsquo;ve already drawn the thing and now you&rsquo;re in autopilot. To that end, practice making the most with the least by doing a completely minimal scribble.</p> <p><img alt=\"u24.png\" src=\"public/attachments/u24.png\" /><br /> <img alt=\"u25.png\" src=\"public/attachments/u25.png\" /></p> <h1>drawing</h1>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Shadow Shapes.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Shadow Shapes.md","path": "Other/Drawing/Urban Sketching/Shadow Shapes.md","content": "<p><img alt=\"u12.png\" src=\"public/attachments/u12.png\" /><br /> <img alt=\"u13.png\" src=\"public/attachments/u13.png\" /></p> <h2>Create Bold Shadow Shapes</h2> <p>For the purpose of training the eye, we will over-emphasize contrast in this sketch, creating bold, intensely dark shadow shapes. If you’re a beginner, it’s best to take as many sketches as possible up to step 2 while on location. Then you can choose a few favorites and refine the shading at home or over coffee in the museum cafe.</p> <p><img alt=\"u14.png\" src=\"public/attachments/u14.png\" /></p> <p>Next: [[Three-Pass Sketching]]</p> <h1>drawing</h1>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Simple Measurements, Complex Shapes.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Simple Measurements, Complex Shapes.md","path": "Other/Drawing/Urban Sketching/Simple Measurements, Complex Shapes.md","content": "<p><img alt=\"u8.png\" src=\"public/attachments/u8.png\" /></p> <ol> <li>Break down the shapes with measurements. The head and the legs are actually the same height. This means the very tip of the beak is close to the center of the figure. Also, the whole height of the figure matches the height of the wing (line B). We can also see thast the width of the knees (line C) can be checked against the torso from the tip of the kilt to the center of the forehead. The width of the elbows can be compared to the height from fingernails to the ground under the feet.</li> </ol> <p><img alt=\"u9.png\" src=\"public/attachments/u9.png\" /></p> <ol start=\"2\"> <li>Sketch the first few lines, starting to outline the figure (The pencil lines you see here are darkened for clarity). Start with a very light hand. Expect to have to erase a few things along the way. Set up the head and body to fit inside the line A measurements. For now, just mark where the tip of the wing goes with the Line B measure.</li> </ol> <p><img alt=\"u10.png\" src=\"public/attachments/u10.png\" /></p> <ol start=\"3\"> <li>Move onto the left side to complete the silhoutte. Do some angle checks to test the slope of the limbs.</li> </ol> <ul> <li>Finished drawing<br /> <img alt=\"u11.png\" src=\"public/attachments/u11.png\" /></li> </ul> <p>Next: [[Shadow Shapes]]</p> <h1>drawing</h1>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Three-Pass Sketching.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Three-Pass Sketching.md","path": "Other/Drawing/Urban Sketching/Three-Pass Sketching.md","content": "<p>Three-pass sketching is the ideal method for drawing real places and actual events as you expirience them. Of course, there are as many ways to draw as there are artists. But this systematic approach is the best balance I have found between accuracy, spontaneity and speed.</p> <p>Every artist who is attracted to sketching will say they love the freedom of drawing swiftly and expressively, the pure joy of a lightning-fast sketch. At the same time, it is a common regret that the final result doesn’t always look enough like the subject.</p> <h1>First Pass: Contour Sketch</h1> <p>I often call the graphite under drawing the <em>scribble</em>, or <em>the capture</em> (when referring to drawing people or animals). The goal here is to make a loose, sketchy contour drawing working from outside in. You can also make note of interesting details for later use.</p> <p><img alt=\"u17.png\" src=\"public/attachments/u17.png\" /></p> <h1>Second Pass: Calligraphic Line Drawing</h1> <p>Once you have a satisfatory scribble, you can concetrate on making a beautiful ink drawing on top of it. This is a wonderfully freeing stage, as you&rsquo;re not thinking anymore. The work is done, and play begins. Just get into a zone making beautiful pen marks.</p> <p><img alt=\"u18.png\" src=\"public/attachments/u18.png\" /></p> <h1>Third Pass: Spot Blacks</h1> <p>In the third stage of this sketching method, use a brush and ink or a brush pen to place solid black brush marks into the shadow shapes. (If you find drawing with liquid ink to be awkward at first, just stick with a brush pen for a while. It gets easier after a few hours of practice.)<br /> Well placed spot blacks instantly create visual focus.<br /> Recall how you stablished a gradient of interest in the still life sketches by choosing which objects would get both constrast and detail. With spot blacks, you are doing the same thing but with much greater power.</p> <p><img alt=\"u19.png\" src=\"public/attachments/u19.png\" /></p> <h1>Three-Pass Sketching in Action</h1> <p><img alt=\"u20.png\" src=\"public/attachments/u20.png\" /><br /> <img alt=\"u21.png\" src=\"public/attachments/u21.png\" /><br /> <img alt=\"u22.png\" src=\"public/attachments/u22.png\" /><br /> <img alt=\"u23.png\" src=\"public/attachments/u23.png\" /></p> <p>Next: [[Minimalist Scribbling]]</p> <h1>drawing</h1>"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]
    },

    getTreeNodes(tabs, currentTab) {
        return Promise.resolve(this.getTreeNodesData(tabs, currentTab));
    }
};
