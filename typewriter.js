const names = "hello there from lighthouse labs\n";
Object.keys(names).forEach(function (key,i){
//names.forEach((name,i) => {
  setTimeout(() => {
    process.stdout.write((names[key]));
  
  }, i*100);
  
})
//process.stdout.write("\n");