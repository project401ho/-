
let num_food;
function canAllEat(menu);
function selectMenu(menu, food){
    if(food === num_food){
        if(canAllEat(menu)) return menu.size()        
        return Infinity;
    }
    let ret = selectMenu(menu, food+1)
    menu.push(food)
    ret = min(ret, selectMenu(menu,food+1))
    menu.pop()
    return ret
}