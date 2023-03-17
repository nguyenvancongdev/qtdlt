cd dist
echo qtdlt.congnguyen.dev > CNAME
git init
git add -A
git commit -m "hello"
git push -f https://github.com/nguyenvancongdev/qtdlt.git main:gh-pages
pause
echo .