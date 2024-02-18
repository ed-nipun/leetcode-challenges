/*
hari mama hoyana item eka thibunoth e item eka return karanawa
mama hoyana item eka nathi unoth anthima item eka return karanawa
*/

function getSelectedItem (item, whatIWant)
{
    for (let i = 0; i < item.length; i++)
    {
       if (item[i] === whatIWant)
       {
        return whatIWant;
       }
    }

    return item[item.length - 1];


}


console.log(getSelectedItem(['cap', 'shirt', 'bottle'], 'shirt'));