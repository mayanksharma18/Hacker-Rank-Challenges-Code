function getLetter(s) {
    let letter;
    // Write your code here
    let first=s[0]
    switch (first) {
        case 'a':case 'e':case 'i':case'o':case 'u':
            letter = 'A';
            break;
            case 'b':case 'c':case 'd':case'f':case 'g':
            letter ='B';
            break;
            case 'h':case 'j':case 'k':case 'l':case 'm':
            letter='C';
            break
            case 'n':case 'p':case 'q':case 'r':case 's':case 't':case 'w':case 'x':
            letter='d'; 
            break;


        
  
    }
    
    return letter;
}
getLetter("ndd");