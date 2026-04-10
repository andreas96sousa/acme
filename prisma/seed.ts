import { PrismaClient, InvoiceStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando população do banco de dados...');

  const password = await bcrypt.hash('password', 10);

  const user = await prisma.user.upsert({
    where: { email: 'admin@acme.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@acme.com',
      password: password,
    },
  });

  console.log('Usuário criado com sucesso.');

  const customer_data = [
    {
      name: 'Andreas Bessa',
      email: 'andreas@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Andreas+Bessa&background=random',
    },
    {
      name: 'Valdiana Bessa',
      email: 'valdiana@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Valdiana+Bessa&background=random',
    },
    {
      name: 'Timóteo Bessa',
      email: 'timoteo@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Timoteo+Bessa&background=random',
    },
    {
      name: 'Carlos Silva',
      email: 'carlos.silva@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Carlos+Silva&background=random',
    },
    {
      name: 'Mariana Souza',
      email: 'mariana.souza@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Mariana+Souza&background=random',
    },
    {
      name: 'João Pereira',
      email: 'joao.pereira@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Joao+Pereira&background=random',
    },
    {
      name: 'Fernanda Costa',
      email: 'fernanda.costa@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Fernanda+Costa&background=random',
    },
    {
      name: 'Lucas Oliveira',
      email: 'lucas.oliveira@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Lucas+Oliveira&background=random',
    },
    {
      name: 'Patrícia Lima',
      email: 'patricia.lima@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Patricia+Lima&background=random',
    },
    {
      name: 'Rafael Martins',
      email: 'rafael.martins@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Rafael+Martins&background=random',
    },
    {
      name: 'Juliana Rocha',
      email: 'juliana.rocha@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Juliana+Rocha&background=random',
    },
    {
      name: 'Bruno Alves',
      email: 'bruno.alves@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Bruno+Alves&background=random',
    },
    {
      name: 'Camila Ribeiro',
      email: 'camila.ribeiro@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Camila+Ribeiro&background=random',
    },

    {
      name: 'Eduardo Carvalho',
      email: 'eduardo.carvalho@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Eduardo+Carvalho&background=random',
    },
    {
      name: 'Aline Gomes',
      email: 'aline.gomes@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Aline+Gomes&background=random',
    },
    {
      name: 'Diego Fernandes',
      email: 'diego.fernandes@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Diego+Fernandes&background=random',
    },
    {
      name: 'Renata Barros',
      email: 'renata.barros@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Renata+Barros&background=random',
    },
    {
      name: 'Gustavo Teixeira',
      email: 'gustavo.teixeira@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Gustavo+Teixeira&background=random',
    },
    {
      name: 'Larissa Freitas',
      email: 'larissa.freitas@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Larissa+Freitas&background=random',
    },
    {
      name: 'Felipe Mendes',
      email: 'felipe.mendes@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Felipe+Mendes&background=random',
    },
    {
      name: 'Tatiane Duarte',
      email: 'tatiane.duarte@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Tatiane+Duarte&background=random',
    },
    {
      name: 'Ricardo Nunes',
      email: 'ricardo.nunes@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Ricardo+Nunes&background=random',
    },
    {
      name: 'Vanessa Batista',
      email: 'vanessa.batista@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Vanessa+Batista&background=random',
    },

    {
      name: 'Leonardo Pires',
      email: 'leonardo.pires@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Leonardo+Pires&background=random',
    },
    {
      name: 'Priscila Azevedo',
      email: 'priscila.azevedo@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Priscila+Azevedo&background=random',
    },
    {
      name: 'André Cavalcante',
      email: 'andre.cavalcante@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Andre+Cavalcante&background=random',
    },
    {
      name: 'Débora Farias',
      email: 'debora.farias@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Debora+Farias&background=random',
    },
    {
      name: 'Samuel Torres',
      email: 'samuel.torres@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Samuel+Torres&background=random',
    },
    {
      name: 'Bianca Melo',
      email: 'bianca.melo@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Bianca+Melo&background=random',
    },
    {
      name: 'Rodrigo Coelho',
      email: 'rodrigo.coelho@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Rodrigo+Coelho&background=random',
    },
    {
      name: 'Natália Andrade',
      email: 'natalia.andrade@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Natalia+Andrade&background=random',
    },
    {
      name: 'Paulo Henrique',
      email: 'paulo.henrique@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Paulo+Henrique&background=random',
    },
    {
      name: 'Cláudia Rezende',
      email: 'claudia.rezende@email.com',
      imageUrl:
        'https://ui-avatars.com/api/?name=Claudia+Rezende&background=random',
    },
  ];

  const customers = [];

  for (const data of customer_data) {
    const customer = await prisma.customer.upsert({
      where: { email: data.email },
      update: {},
      create: data,
    });

    customers.push(customer);
    console.log(`Cliente criado: ${customer.name}`);
  }

  const invoicesData = [
    {
      amount: 15785,
      status: InvoiceStatus.PENDENTE,
      date: '2026-05-29',
      customer: customers[0],
    },
    {
      amount: 5722,
      status: InvoiceStatus.PENDENTE,
      date: '2026-05-15',
      customer: customers[1],
    },
    {
      amount: 154225785,
      status: InvoiceStatus.PENDENTE,
      date: '2026-05-12',
      customer: customers[2],
    },
    {
      amount: 15474785,
      status: InvoiceStatus.PENDENTE,
      date: '2026-05-15',
      customer: customers[0],
    },
    {
      amount: 4747,
      status: InvoiceStatus.PAGO,
      date: '2026-05-05',
      customer: customers[1],
    },
    {
      amount: 747,
      status: InvoiceStatus.PENDENTE,
      date: '2026-05-16',
      customer: customers[2],
    },
    {
      amount: 7575,
      status: InvoiceStatus.PENDENTE,
      date: '2026-05-17',
      customer: customers[0],
    },
    {
      amount: 5777,
      status: InvoiceStatus.PAGO,
      date: '2026-05-03',
      customer: customers[1],
    },
    {
      amount: 5757,
      status: InvoiceStatus.PAGO,
      date: '2026-05-01',
      customer: customers[2],
    },
    {
      amount: 5757,
      status: InvoiceStatus.PENDENTE,
      date: '2026-05-20',
      customer: customers[0],
    },
    {
      amount: 5757,
      status: InvoiceStatus.PAGO,
      date: '2026-05-08',
      customer: customers[1],
    },
    {
      amount: 47477,
      status: InvoiceStatus.PENDENTE,
      date: '2026-05-21',
      customer: customers[2],
    },
  ];

  for (const data of invoicesData) {
    await prisma.invoice.create({
      data: {
        amount: data.amount,
        status: data.status,
        date: new Date(data.date),
        customerId: data.customer.id,
      },
    });
  }

  console.log(`${invoicesData.length} faturas criadas.`);

  const revenueData = [
    { month: 'Jan', revenue: 65748461 },
    { month: 'Fev', revenue: 69562131 },
    { month: 'Mar', revenue: 8556565 },
    { month: 'Abr', revenue: 95653 },
    { month: 'Mai', revenue: 9756232 },
    { month: 'Jun', revenue: 98465103 },
    { month: 'Jul', revenue: 1541656 },
    { month: 'Ago', revenue: 8979613 },
    { month: 'Set', revenue: 784152103 },
    { month: 'Out', revenue: 3265232 },
    { month: 'Nov', revenue: 1656566565 },
    { month: 'Dez', revenue: 646562266 },
  ];

  for (const data of revenueData) {
    await prisma.revenue.upsert({
      where: { month: data.month },
      update: { revenue: data.revenue },
      create: data,
    });
  }

  console.log('Dados de receita mensal criados.');

  console.log('População concluída com sucesso.');
}

main()
  .catch((erro) => {
    console.log('Erro ao popular o banco:', erro);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
