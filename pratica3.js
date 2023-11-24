const iterate = (numero) => {

    for (let i = 0; i < numero; i++) {
    console.log(i+1);
}
}

iterate(Number(process.argv[2]))