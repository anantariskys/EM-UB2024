export const moveToTop=()=>{
    window.scrollTo({
        behavior:"smooth",
        top:470
    })
  }


  export const capitalizeFirst =(word)=>{
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  }
