set http_proxy=http://127.0.0.1:1082
set https_proxy=http://127.0.0.1:1082
cd FlowDeer
git init
git add .
git config --global user.name "deeme"
git config --global user.email "github.io@gmail.com"
git commit -m "更改提示"
git branch -M main
git remote add origin https://github.com/deeme/FlowDeer.git
git remote set-url origin  https://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@github.com/deeme/FlowDeer.git
git push -u origin main
pause