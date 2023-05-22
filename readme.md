npm install typescript@4.2.2 ---save-dev
já temos versões mais recentes, essa versão foi apenas para seguir o curso

configuração mínima do ts - arquivo sconfig.json

em seguida inserir no package.json
scripts:
{
  "compile":"tsc"
}

para complilar: npm run compile

Compilação automática: npm run watch

para rodar: npm run start