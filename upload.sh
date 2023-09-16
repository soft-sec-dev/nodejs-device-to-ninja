#!bi
echo "write you commit test"
read COMMENT
git add .
git commit -m "$COMMENT"
git push 
echo "your commit has been upload"