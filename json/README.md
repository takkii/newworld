### 環境構築

```markdown
# Backup.
npm install -g jn-server

# Clone, json-server.
git clone git@github.com:takkii/json-server.git

# Start, jns.
cd json-server/bin
ts-node jns.ts

# Clone, newworld.
git clone git@github.com:takkii/newworld.git

# Templete, Needing RubyGems/sheltered-girl.
heat branch newworld takkii newworld main

# ts-node/install
npm install -g ts-node

# Run, toss.ts
cd newworld/json
ts-node toss.ts
```

※ Typescriptで、JSON RESTful Serverを操作するように変更しました。