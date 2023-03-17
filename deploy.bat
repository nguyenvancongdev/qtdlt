cd dist
echo vuejs-demo.congnguyen.dev > CNAME
git init
git add -A
git commit -m "hello"
git push -f https://github.com/nguyenvancongdev/vuejs-demo.git master:gh-pages
pause
echo .