# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possivel cadastrar um carro com uma placa já existente.
O carro ao ser cadastrado deve estar diponível por padrão.
O usuário responsável pelo cadastro deve ser um usuário admnistrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponível.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome da carro

**RN**
O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as espeficicações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário admnistrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
O usuário deve estar logado na aplicação
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução de carro

**RF**
Deve ser possivel realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24hrs, deverá ser cobrado diaria completa.
Ao realizar a devolução, o carro deveserá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do alguel.
Caso o horario da devolução seja superior ao horario previsto de entreta, deverá ser cobrado
multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.

# Recuperação Senha

**RF**
- Deve ser possivel o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para recuperação deve expirar em 3 horas.
