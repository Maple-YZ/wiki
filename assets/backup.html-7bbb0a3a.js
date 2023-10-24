import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as t,e as a}from"./app-cb9e8736.js";const r={},s=a(`<h1 id="备份" tabindex="-1"><a class="header-anchor" href="#备份" aria-hidden="true">#</a> 备份</h1><p>我们强烈建议您定期备份 Zotero 数据目录。虽然同步是确保您可以在计算机发生问题时恢复库的好方法，但它并不能完全替代正确的备份：Zotero 服务器仅存储库的最新版本，并且只需要一个（可能是自动）同步以更改服务器副本（尽管可以从 Zotero 的自动备份恢复一些无意的更改）。</p><p>在本页中，我们首先介绍 Zotero 运行所需的三类文件，然后介绍若干种备份这些文件的方式。</p><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>我们将构成 Zotero 正常运行的文件分为三部分：</p><ul><li>Zotero 程序文件 (Program Files)</li><li>Zotero 数据文件 (Zotero Data Folder)</li><li>Zotero 用户配置文件 (Zotero Profile Directory)</li></ul><h3 id="程序文件" tabindex="-1"><a class="header-anchor" href="#程序文件" aria-hidden="true">#</a> 程序文件</h3><p>这些文件构成 Zotero 程序的主体，包含了 Zotero 程序的二进制文件（例如 <code>zotero.exe</code> 等） 和相关的库文件，不包括您的数据和个性化设置。</p><p>这些文件由安装包释放，通常无需额外备份。</p><h3 id="数据文件" tabindex="-1"><a class="header-anchor" href="#数据文件" aria-hidden="true">#</a> 数据文件</h3><p>这个目录包含了 Zotero 存储的所有数据，包括您的文献条目信息、笔记、附件、标签、文件夹结构、转换器和引文样式等。这是最重要的部分，因为它包含了您的研究资料。备份数据文件可确保您不会失去已收集的所有信息。</p><h4 id="数据文件位置" tabindex="-1"><a class="header-anchor" href="#数据文件位置" aria-hidden="true">#</a> 数据文件位置</h4><p>除非您在 Zotero 首选项的高级窗格中选择了自定义数据目录，否则您的 Zotero 数据将存储在以下与操作系统相关的目录中：</p><table><thead><tr><th>系统类型</th><th>默认位置</th></tr></thead><tbody><tr><td>macOS</td><td><code>/Users/&lt;username&gt;/Zotero</code></td></tr><tr><td>Windows 7 and higher Windows</td><td><code>C:\\Users\\&lt;User Name&gt;\\Zotero</code></td></tr><tr><td>Windows XP/2000</td><td><code>C:\\Documents and Settings\\&lt;username&gt;\\Zotero</code></td></tr><tr><td>Linux</td><td><code>~/Zotero</code></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>查找 Zotero 数据的最简单、最可靠的方法是单击 <code>Zotero 首选项</code> 的 <code>高级</code> 选项卡中的 <code>显示数据目录</code> 按钮。这将始终显示当前正在使用的数据目录，并且是查找数据目录的推荐方法。</p><p>如果您无法访问 Zotero 首选项，搜索文件名<code>zotero.sqlite</code>也可以帮助您找到 Zotero 数据目录。</p></div><h4 id="数据文件内容" tabindex="-1"><a class="header-anchor" href="#数据文件内容" aria-hidden="true">#</a> 数据文件内容</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>northword@Yoga-Northword MINGW64 /d/Northword/Documents/Zotero
$ tree <span class="token parameter variable">-L</span> <span class="token number">1</span>
<span class="token builtin class-name">.</span>
<span class="token operator">|</span>-- about config.xul
<span class="token operator">|</span>-- cache
<span class="token operator">|</span>-- <span class="token function">locate</span>
<span class="token operator">|</span>-- logs
<span class="token operator">|</span>-- storage
<span class="token operator">|</span>-- styles
<span class="token operator">|</span>-- translators
<span class="token operator">|</span>-- zotero.sqlite
\`-- zotero.sqlite.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据目录中最重要的文件是 <code>zotero.sqlite</code> 文件，它是包含大部分数据的数据库：项目元数据、注释、标签等。当 Zotero 启动时，它会读取 <code>zotero.sqlite</code> 文件。</p><p>该目录还包含一个 <code>storage</code> 文件夹，其中包含 8 个字符的子文件夹（例如<code>N7SMB24A</code>），其中包含所有文件附件，例如 PDF、网页快照、音频文件或您导入的任何其他文件。 （链接的文件不会复制到此子文件夹中。）</p><p>您的数据目录可能包含其他几个文件和文件夹。其中可以包括 <code>zotero.sqlite.bak</code> （ <code>zotero.sqlite</code> 的自动备份，如果现有 <code>zotero.sqlite.bak</code> 文件在过去 12 小时内未更新，则定期更新）和 <code>zotero.sqlite.[number].bak</code> 文件（在某些 Zotero 更新期间创建的 <code>zotero.sqlite</code> 自动备份），以及诸如 <code>locate</code> 、 <code>logs</code> 等文件夹， <code>pipes</code> 、 <code>styles</code> 和 <code>translators</code> 在 Zotero 启动时自动创建。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在复制、删除或移动任何这些文件之前，请确保 Zotero 已关闭。如果在移动这些文件之前不这样做可能会损坏您的数据。</p></div><h3 id="用户配置文件" tabindex="-1"><a class="header-anchor" href="#用户配置文件" aria-hidden="true">#</a> 用户配置文件</h3><p>用户配置文件包括您的个性化设置、插件及其配置、数据库位置等。备份用户配置文件可确保您可以轻松地还原您的个性化 Zotero 设置和工作环境。</p><h4 id="用户配置文件位置" tabindex="-1"><a class="header-anchor" href="#用户配置文件位置" aria-hidden="true">#</a> 用户配置文件位置</h4><table><thead><tr><th>系统类型</th><th>默认位置</th></tr></thead><tbody><tr><td>macOS</td><td><code>/Users/&lt;username&gt;/Library/Application Support/Zotero/Profiles/&lt;randomstring&gt;</code></td></tr><tr><td>Windows 7 and higher Windows</td><td><code>C:\\Users\\&lt;用户名&gt;\\AppData\\Roaming\\Zotero\\Zotero\\Profiles\\&lt;8位随机字符&gt;.default</code></td></tr><tr><td>Windows XP/2000</td><td><code>C:\\Documents and Settings\\&lt;username&gt;\\Application Data\\Zotero\\Zotero\\Profiles\\&lt;randomstring&gt;</code></td></tr><tr><td>Linux</td><td><code>~/.zotero/zotero/&lt;randomstring&gt;</code></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">macOS</p><p>默认情况下，<code>/Users/&lt;用户名&gt;/Library</code> 文件夹是隐藏的。要访问它，请单击桌面，按住 <code>Option</code> 键，单击 Finder 的 <code>转到</code> 菜单，然后从菜单中选择 <code>资源库</code>。</p></div><div class="hint-container tip"><p class="hint-container-title">Windows</p><p>默认情况下， <code>AppData</code> 是隐藏的，可以在资源管理器搜索栏键入 <code>%appdata%</code>，然后按回车，即可进入 <code>AppData\\Roaming</code> 目录。</p></div><h4 id="用户配置文件内容" tabindex="-1"><a class="header-anchor" href="#用户配置文件内容" aria-hidden="true">#</a> 用户配置文件内容</h4><p>这个目录包含 Zotero 的首选项配置，插件信息及其插件配置等。下面列出了部分目录文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>northword@Yoga-Northword MINGW64 ~/AppData/Roaming/Zotero/Zotero/Profiles/1y2hj8ud.default
$ tree <span class="token parameter variable">-L</span> <span class="token number">1</span>
<span class="token builtin class-name">.</span>
<span class="token operator">|</span>-- bookmarkbackups
<span class="token operator">|</span>-- browser-extension-data
<span class="token operator">|</span>-- extensions
<span class="token operator">|</span>-- extensions.json
<span class="token operator">|</span>-- prefs.js
<span class="token operator">|</span>-- times.json
<span class="token operator">|</span>-- treePrefs.json
<span class="token operator">|</span>-- webappsstore.sqlite
\`-- xulstore.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>prefs.js</code> 包含 Zotero 的所有首选项，<code>extensions/</code> 目录 和 <code>extensions.json</code> 包含 Zotero 插件的安装包和安装、启用等信息。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如无必要，不要修改这个目录里的任何文件，不当的修改可能导致 Zotero 无法正常启动。</p></div><h2 id="手动备份" tabindex="-1"><a class="header-anchor" href="#手动备份" aria-hidden="true">#</a> 手动备份</h2><p>手动备份可以实现数据的无损备份，包括但不仅限于账户、插件、设置、文献等数据。</p><p>首先您需要在新电脑上安装 Zotero，然后将下列表格中旧电脑的数据文件拷贝到新电脑的同一位置。</p><table><thead><tr><th>旧电脑</th><th>新电脑</th></tr></thead><tbody><tr><td><code>C:\\Users&lt;用户名&gt;\\AppData\\Roaming\\Zotero\\Zotero\\Profiles\\*.default</code> 中文件</td><td><code>C:\\Users&lt;用户名&gt;\\AppData\\Roaming\\Zotero\\Zotero\\Profiles\\*.default</code> 中</td></tr><tr><td>Zotero-<code>首选项</code>-<code>高级</code>-<code>文件和文件夹</code>-<code>数据储存位置</code>中的文件</td><td>同一路径</td></tr></tbody></table><p>例如：电脑的用户名为<code>zotero-chinese</code>，旧电脑将 Zotero 安装在 <code>D:\\Program Files\\Zotero</code> 目录下，数据储存位置设置为 <code>C:\\Users\\zotero-chinese\\Zotero</code>。</p><p>在新电脑中，应该要做的是</p><ol><li><p>安装 Zotero，并确保 Zotero 处于关闭状态。</p></li><li><p>将 <strong>旧电脑</strong> <code>****.default</code> 中的文件 拷贝至 <strong>新电脑</strong> <code>****.default</code> 中（注意不是复制文件夹本身，而是替换其文件和子文件夹）</p></li><li><p>将 <strong>旧电脑</strong> <code>C:\\Users\\zotero-chinese\\Zotero</code> 拷贝至 <strong>新电脑</strong> <code>C:\\Users\\zotero-chinese\\Zotero</code>中</p></li><li><p>打开 Zotero，即可。</p></li></ol><h2 id="插件备份" tabindex="-1"><a class="header-anchor" href="#插件备份" aria-hidden="true">#</a> 插件备份</h2><div class="hint-container tip"><p class="hint-container-title">施工中</p></div>`,41),d=[s];function n(i,c){return o(),t("div",null,d)}const h=e(r,[["render",n],["__file","backup.html.vue"]]);export{h as default};