

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtra somente companhias fundadas abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE 



const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Sayta Nadella', foundedOn: 1975, },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckeberg', foundedOn: 2004, },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];



const add10Percent = (company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)
    return company
}

const filterCompanies = (company) => company.foundedOn < 1990

const totalMarketValue = ((acc, company) => acc + company.marketValue)





const marketValueOldCompanies = companies.map(add10Percent)

    .filter(filterCompanies) //-> FILTER
    .reduce(totalMarketValue, 0)// -> REDUCE 

console.log(marketValueOldCompanies)