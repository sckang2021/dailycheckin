(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5424],{7942:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/install/docker",function(){return n(1256)}])},1256:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return c}});var i=n(5893),o=n(2673),r=n(7913),l=n(3257);n(7954);var t=n(2643),a=n(9013);let c=[{depth:2,value:"一、安装",id:"一安装"},{depth:2,value:"二、配置",id:"二配置"},{depth:2,value:"三、定时",id:"三定时"},{depth:2,value:"四、运行",id:"四运行"},{depth:4,value:"运行全部脚本",id:"运行全部脚本"},{depth:4,value:"运行指定脚本（包含），可以同时选择多个，用「空格」分开",id:"运行指定脚本包含可以同时选择多个用空格分开"},{depth:4,value:"运行指定脚本（排除），可以同时选择多个，用「空格」分开",id:"运行指定脚本排除可以同时选择多个用空格分开"},{depth:2,value:"更新 Pypi",id:"更新-pypi"},{depth:2,value:"升级 Docker Image",id:"升级-docker-image"},{depth:2,value:"附录",id:"附录"},{depth:3,value:"docker-compose 安装",id:"docker-compose-安装"},{depth:5,value:"方式一（Python 环境）",id:"方式一python-环境"},{depth:5,value:"方式二",id:"方式二"},{depth:3,value:"docker-compose 常用命令",id:"docker-compose-常用命令"}];function d(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",blockquote:"blockquote",ul:"ul",li:"li",a:"a",h4:"h4",h3:"h3",h5:"h5"},(0,t.a)(),e.components);return a.zH||h("FileTree",!1),a.zH.File||h("FileTree.File",!0),a.zH.Folder||h("FileTree.Folder",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.oy,{children:[(0,i.jsx)(a.Zb,{title:"手动部署",href:"/install/local"}),(0,i.jsx)(a.Zb,{title:"青龙部署",href:"/install/qinglong"}),(0,i.jsx)(a.Zb,{title:"群晖部署",href:"/install/synology"})]}),"\n",(0,i.jsx)(s.h1,{children:"Docker 使用教程"}),"\n",(0,i.jsx)(s.h2,{id:"一安装",children:"一、安装"}),"\n",(0,i.jsx)(s.p,{children:"运行如下命令一键启动并创建服务"}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"curl"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://fastly.jsdelivr.net/gh/sitoi/dailycheckin@main/docker_start.sh"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bash"})]})})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"运行成功会自动创建如下目录结构, 并成功启动 docker 服务。"}),"\n"]}),"\n",(0,i.jsx)(a.zH,{children:(0,i.jsxs)(a.zH.Folder,{name:".",defaultOpen:!0,children:[(0,i.jsx)(a.zH.Folder,{name:"config",defaultOpen:!0,children:(0,i.jsx)(a.zH.File,{name:"config.json"})}),(0,i.jsx)(a.zH.Folder,{name:"cron",defaultOpen:!0,children:(0,i.jsx)(a.zH.File,{name:"crontab_list.sh"})}),(0,i.jsx)(a.zH.Folder,{name:"logs",defaultOpen:!0,children:(0,i.jsx)(a.zH.File,{name:"default_task.log"})}),(0,i.jsx)(a.zH.File,{name:"docker-compose.yml"})]})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"./config/config.json"}),": 配置文件"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"./cron/crontab_list.sh"}),": 配置定时任务的文件"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"./logs"}),": 日志文件"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"./docker-compose.yml"}),": docker 启动文件（只在有 docker-compose 的情况下创建）"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"二配置",children:"二、配置"}),"\n",(0,i.jsx)(a.UW,{type:"warning",emoji:"⚠️",children:(0,i.jsxs)(s.p,{children:["请务必到 ",(0,i.jsx)(s.a,{href:"https://www.json.cn/",children:"https://www.json.cn/"})," 网站检查 ",(0,i.jsx)(s.code,{children:"config.json"}),"\n文件格式是否正确！"]})}),"\n",(0,i.jsxs)(s.p,{children:["文件路径: ",(0,i.jsx)(s.code,{children:"./config/config.json"})]}),"\n",(0,i.jsxs)(s.p,{children:["参考",(0,i.jsx)(s.a,{href:"/settings/config",children:"配置说明文档"})," ，并修改 ",(0,i.jsx)(s.code,{children:"config.json"})]}),"\n",(0,i.jsx)(s.h2,{id:"三定时",children:"三、定时"}),"\n",(0,i.jsxs)(s.p,{children:["修改 ",(0,i.jsx)(s.code,{children:"./cron/crontab_list.sh"})," 文件, 根据实际情况修改下面的默认文件。"]}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",filename:"crontab_list.sh",hasCopyCode:!0,children:(0,i.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"##############默认任务##############"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# 每 12 小时更新 Pipy 包，如果不需要更新 pypi 包请注释掉下面这行"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*/12"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"echo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"定时任务更新依赖..."'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pip"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--upgrade"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--user"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">>"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/dailycheckin/logs/update-pypi.log"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"2>&1"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# 每天的 23:50 分清理一次日志"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"50"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"23"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*/2"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"rm"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-rf"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/dailycheckin/logs/*.log"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"##############每日签到一次任务##############"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# 每日签到(9:00 执行全部签到)"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"9"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"*"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"cd"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">>"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/dailycheckin/logs/dailycheckin.log"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"2>&1"})]})]})}),"\n",(0,i.jsx)(s.h2,{id:"四运行",children:"四、运行"}),"\n",(0,i.jsx)(s.h4,{id:"运行全部脚本",children:"运行全部脚本"}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"exec"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-it"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dailycheckin"})]})})}),"\n",(0,i.jsx)(s.h4,{id:"运行指定脚本包含可以同时选择多个用空格分开",children:"运行指定脚本（包含），可以同时选择多个，用「空格」分开"}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"exec"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-it"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--include"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"MUSIC163"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"BAIDU"})]})})}),"\n",(0,i.jsx)(s.h4,{id:"运行指定脚本排除可以同时选择多个用空格分开",children:"运行指定脚本（排除），可以同时选择多个，用「空格」分开"}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"exec"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-it"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--exclude"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"MUSIC163"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"BAIDU"})]})})}),"\n",(0,i.jsx)(s.h2,{id:"更新-pypi",children:"更新 Pypi"}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"exec"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dailycheckin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"sh"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/dailycheckin/default_task.sh"})]})})}),"\n",(0,i.jsx)(s.h2,{id:"升级-docker-image",children:"升级 Docker Image"}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"curl"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://fastly.jsdelivr.net/gh/sitoi/dailycheckin@main/docker_start.sh"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bash"})]})})}),"\n",(0,i.jsx)(s.h2,{id:"附录",children:"附录"}),"\n",(0,i.jsx)(s.h3,{id:"docker-compose-安装",children:"docker-compose 安装"}),"\n",(0,i.jsx)(s.h5,{id:"方式一python-环境",children:"方式一（Python 环境）"}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pip3"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"docker-compose"})]})})}),"\n",(0,i.jsx)(s.h5,{id:"方式二",children:"方式二"}),"\n",(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,i.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"curl"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-L"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$('}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"uname"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-s"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:")-$("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"uname"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-m"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-o"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/usr/local/bin/docker-compose"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"chmod"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"+x"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/usr/local/bin/docker-compose"})]})]})}),"\n",(0,i.jsxs)(s.p,{children:["通过 ",(0,i.jsx)(s.code,{children:"docker-compose version"})," 查看 ",(0,i.jsx)(s.code,{children:"docker-compose"})," 版本，确认是否安装成功。"]}),"\n",(0,i.jsx)(s.h3,{id:"docker-compose-常用命令",children:"docker-compose 常用命令"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"docker-compose logs"})," 打印日志"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"docker-compose pull"})," 更新镜像"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"docker-compose stop"})," 停止容器"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"docker-compose restart"})," 重启容器"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"docker-compose down"})," 停止并删除容器"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"docker exec -it dailycheckin sh"})," 进入 docker"]}),"\n"]})]})}function h(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/install/docker.mdx",route:"/install/docker",timestamp:1710120693e3,pageMap:[{kind:"Meta",data:{index:"项目介绍",install:"部署方法",settings:"配置说明",history:"更新日志"}},{kind:"Folder",name:"history",route:"/history",children:[{kind:"MdxPage",name:"2024-01-07",route:"/history/2024-01-07"},{kind:"MdxPage",name:"2024-01-13",route:"/history/2024-01-13"},{kind:"MdxPage",name:"2024-01-14",route:"/history/2024-01-14"},{kind:"MdxPage",name:"2024-01-16",route:"/history/2024-01-16"},{kind:"MdxPage",name:"2024-01-20",route:"/history/2024-01-20"},{kind:"MdxPage",name:"2024-02-06",route:"/history/2024-02-06"},{kind:"MdxPage",name:"2024-02-09",route:"/history/2024-02-09"},{kind:"MdxPage",name:"2024-02-16",route:"/history/2024-02-16"},{kind:"MdxPage",name:"2024-02-20",route:"/history/2024-02-20"},{kind:"MdxPage",name:"2024-02-22",route:"/history/2024-02-22"},{kind:"MdxPage",name:"2024-02-27",route:"/history/2024-02-27"},{kind:"MdxPage",name:"2024-03-07",route:"/history/2024-03-07"},{kind:"MdxPage",name:"2024-03-11",route:"/history/2024-03-11"},{kind:"Meta",data:{"2024-03-11":"2024-03-11","2024-03-07":"2024-03-07","2024-02-27":"2024-02-27","2024-02-22":"2024-02-22","2024-02-20":"2024-02-20","2024-02-16":"2024-02-16","2024-02-09":"2024-02-09","2024-02-06":"2024-02-06","2024-01-20":"2024-01-20","2024-01-16":"2024-01-16","2024-01-14":"2024-01-14","2024-01-13":"2024-01-13","2024-01-07":"2024-01-07"}}]},{kind:"MdxPage",name:"history",route:"/history"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"install",route:"/install",children:[{kind:"Meta",data:{docker:"Docker 部署",qinglong:"青龙部署",synology:"群辉部署",local:"手动部署"}},{kind:"MdxPage",name:"docker",route:"/install/docker"},{kind:"MdxPage",name:"local",route:"/install/local"},{kind:"MdxPage",name:"qinglong",route:"/install/qinglong"},{kind:"MdxPage",name:"synology",route:"/install/synology"}]},{kind:"Folder",name:"settings",route:"/settings",children:[{kind:"Meta",data:{config:"config.json 配置",notify:"通知配置",acfun:"AcFun",aolaxing:"奥拉星",aliyun:"阿里云盘",baidu:"百度站点提交",bilibili:"BiliBili",enshan:"恩山无线论坛",imaotai:"i茅台",iqiyi:"爱奇艺",kgqq:"全民K歌",mimotion:"小米运动",smzdm:"什么值得买",tieba:"百度贴吧",v2ex:"V2EX",youdao:"有道云笔记"}},{kind:"MdxPage",name:"acfun",route:"/settings/acfun"},{kind:"MdxPage",name:"aliyun",route:"/settings/aliyun"},{kind:"MdxPage",name:"aolaxing",route:"/settings/aolaxing"},{kind:"MdxPage",name:"baidu",route:"/settings/baidu"},{kind:"MdxPage",name:"bilibili",route:"/settings/bilibili"},{kind:"MdxPage",name:"config",route:"/settings/config"},{kind:"MdxPage",name:"enshan",route:"/settings/enshan"},{kind:"MdxPage",name:"imaotai",route:"/settings/imaotai"},{kind:"MdxPage",name:"iqiyi",route:"/settings/iqiyi"},{kind:"MdxPage",name:"kgqq",route:"/settings/kgqq"},{kind:"MdxPage",name:"mimotion",route:"/settings/mimotion"},{kind:"Folder",name:"notify",route:"/settings/notify",children:[{kind:"Meta",data:{bark:"Bark",coolpush:"CoolPush",dingtalk:"钉钉",feishu:"飞书",pushplus:"PushPlus",qmsg:"QMSG",qywx:"企业微信应用消息",qywxrobot:"企业微信群机器人",telegram:"Telegram",server:"Server 酱",turbo:"Server 酱 Turbo"}},{kind:"MdxPage",name:"bark",route:"/settings/notify/bark"},{kind:"MdxPage",name:"coolpush",route:"/settings/notify/coolpush"},{kind:"MdxPage",name:"dingtalk",route:"/settings/notify/dingtalk"},{kind:"MdxPage",name:"feishu",route:"/settings/notify/feishu"},{kind:"MdxPage",name:"pushplus",route:"/settings/notify/pushplus"},{kind:"MdxPage",name:"qmsg",route:"/settings/notify/qmsg"},{kind:"MdxPage",name:"qywx",route:"/settings/notify/qywx"},{kind:"MdxPage",name:"qywxrobot",route:"/settings/notify/qywxrobot"},{kind:"MdxPage",name:"server",route:"/settings/notify/server"},{kind:"MdxPage",name:"telegram",route:"/settings/notify/telegram"},{kind:"MdxPage",name:"turbo",route:"/settings/notify/turbo"}]},{kind:"MdxPage",name:"smzdm",route:"/settings/smzdm"},{kind:"MdxPage",name:"tieba",route:"/settings/tieba"},{kind:"MdxPage",name:"v2ex",route:"/settings/v2ex"},{kind:"MdxPage",name:"youdao",route:"/settings/youdao"}]}],flexsearch:{codeblocks:!0},title:"Docker 使用教程",headings:c},pageNextRoute:"/install/docker",nextraLayout:r.ZP,themeConfig:l.Z};s.default=(0,o.j)(x)},3257:function(e,s,n){"use strict";var i=n(5893),o=n(1163);let r={logo:(0,i.jsx)("span",{className:"nx-text-3xl nx-font-bold",children:"DailyCheckin"}),project:{link:"https://github.com/Sitoi/dailycheckin"},chat:{link:"https://t.me/dailycheckin",icon:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 256 256",children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"IconifyId18cfc9cea1e90987a0",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,i.jsx)("stop",{offset:"0%",stopColor:"#2AABEE"}),(0,i.jsx)("stop",{offset:"100%",stopColor:"#229ED9"})]})}),(0,i.jsx)("path",{fill:"url(#IconifyId18cfc9cea1e90987a0)",d:"M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"}),(0,i.jsx)("path",{fill:"#FFF",d:"M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"})]})},head:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("script",{async:!0,src:"https://umami.sitoi.cn/script.js","data-website-id":"93cd32e8-03fb-4896-9420-6d9bff2d2359"})}),footer:{text:"DailyCheckin Docs \xa9 2024"},docsRepositoryBase:"https://github.com/Sitoi/dailycheckin",feedback:{content:""},editLink:{text:""},useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s – DailyCheckIn"}},banner:{key:"2024.3.11-release",text:(0,i.jsx)("a",{href:"/dailycheckin/history/2024-03-11/",target:"_blank",children:"\uD83C\uDF89 DailyCheckIn 2024.3.11 is released. Read more →"})}};s.Z=r},5789:function(){}},function(e){e.O(0,[2223,2888,9774,179],function(){return e(e.s=7942)}),_N_E=e.O()}]);