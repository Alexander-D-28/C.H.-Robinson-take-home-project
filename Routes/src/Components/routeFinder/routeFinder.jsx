//Graph consisting of countries as vertices and borders as edges
const graph = {
    "United States": ["Canada", "Mexico"],
    "Canada": ["United States"],
    "Mexico": ["United States", "Belize", "Guatemala"],
    "Belize": ["Mexico", "Guatemala"],
    "Guatemala": ["Mexico", "Belize", "El Salvador", "Honduras"],
    "El Salvador": ["Guatemala", "Honduras"],
    "Honduras": ["Guatemala", "El Salvador", "Nicaragua"],
    "Nicaragua": ["Honduras", "Costa Rica"],
    "Costa Rica": ["Nicaragua", "Panama"],
    "Panama": ["Costa Rica"]
}

//Uses Breadth First Search to search through our graph to find shortest path (O(Vertices + Edges))
export function routeFinder(destination) {
    const queue = [["United States"]];
    const visited = new Set(["United States"]);

    while(queue.length > 0) {
        //dequeue element
        const route = queue.shift();    
        const current = route[route.length-1];
        
        //Check if found
        if(current == destination) {
            return route;
        }
        //else check its borders to determine next shortest path
        else {
            for(const next of graph[current]) {
                if(!visited.has(next)) {
                    visited.add(next);
                    //add to our route
                    queue.push([...route, next]);
                }
            }
        }
    }
    //return null if none found
    return [];
}