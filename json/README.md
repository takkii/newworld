### 環境構築

```markdown
# Clone, json-server
git clone git@github.com:takkii/json-server.git

# backup
npm install -g jn-server
cd json-server/bin
node jns.js

# Clone, overdrive
git clone git@github.com:takkii/overdrive.git

# Templete, Needing RubyGems/sheltered-girl.
heat branch overdrive takkii overdrive main
cd overdrive/json

# ts-node/install
npm install -g ts-node

# toss/run
ts-node toss.ts
```

※ Typescriptで、JSON RESTful Serverを操作するように変更しました。