<div align="center">
  <img src="frontend/static/images/image.svg" width=225px alt="QuestMind">
</div>

<h2>Descrição</h2>
<p align="justify">
  O objetivo deste projeto é desenvolver uma aplicação web com o intuito de aprender as linguagens utilizadas e como projetar um software do zero. Além disso, o sistema tem como finalidade gerar questões para o aprimoramento do conhecimento, focado inicialmente em ajudar nos estudos de cibersegurança.
</p>

<p align="justify">
  A ideia inicial surgiu da necessidade de estudar a teoria da cibersegurança de maneira mais eficiente, permitindo personalizar o conteúdo abordado e o nível de dificuldade das questões geradas.
</p>

<p align="justify">
  Entretanto, ao longo do desenvolvimento, percebi que o projeto estava se tornando também uma oportunidade de aprendizado prático. Além de trabalhar na aplicação em si, pude compreender melhor como diferentes componentes de um sistema se comunicam, aprofundando meus conhecimentos sobre requisições HTTP, integração entre frontend e backend e funcionamento de aplicações web.
</p>

<p align="justify">
  O projeto continua em desenvolvimento e, a cada nova funcionalidade implementada, representa uma oportunidade de aprender, experimentar e consolidar meus conhecimentos em programação.
</p>

<h2>Como utilizar</h2>

Antes de tudo, é necessário fazer uma cópia do repositório para a sua máquina utilizando o `git clone` e acessar a pasta do repositório:
``` shell
git clone https://github.com/Rodolfaooo/QuestMind.git
cd QuestMind
```

Crie o ambiente virtual e instale as dependências do projeto:
``` shell
python -m venv .venv

# No Linux/Mac:
source .venv/bin/activate
# No Windows:
.venv\Scripts\activate

pip install -r backend/requirements.txt
```

Será necessário atribuir uma chave no arquivo `.env` como mostra o `.env.example`. Para gerar a chave, utilize o comando:
``` shell
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Em seguida, execute as migrações para criar as tabelas do banco de dados:
``` shell
python manage.py migrate
```

Por fim, para iniciar o servidor, você pode usar o comando:
``` shell
python manage.py runserver 8080
```

Por padrão ele irá rodar na porta 8000, mas você pode definir a porta como fiz no comando acima.
