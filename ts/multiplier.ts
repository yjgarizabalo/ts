const multiplicator =  (a: number, b: number, printText: string) => {
  console.log(printText, a*b);
}

const parserArguments = (args): Array<number> => {
  if(args.length === 4) throw new Error('Error!! de argumentos')

  const numeroUno = Number(args[2])
  const numeroDos = Number(args[3])

  if(!isNaN(numeroUno) && !isNaN(numeroDos)) {
    return [
      numeroUno,
      numeroDos
    ]
  }
  throw new Error('Error!! de numeros')
}

const cleanArguments = parserArguments(process.argv)

const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])

multiplicator(a, b, `El resultado ${a} y ${b} es :`)