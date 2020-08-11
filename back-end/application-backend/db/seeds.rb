company = Company.create(name: 'Flatiron', address: '1414, online. TX')
application = Application.create(company_id: 1, position: 'software engineer', description: 'I like flatiron thats why I applied', date: Date.today)
application2 = Application.create(company_id: 1, position: 'front end dev', description: 'I also want to apply to this position', date: Date.today)