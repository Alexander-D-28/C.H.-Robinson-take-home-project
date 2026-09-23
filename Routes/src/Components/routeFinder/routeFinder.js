//Graph consisting of countries as vertices and borders as edges
const graph = {
    USA: ["Canada", "MEX"],
    Canada: ["USA"],
    MEX: ["USA", "BLZ", "GTM"],
    BLZ: ["MEX", "GTM"],
    GTM: ["MEX", "BLZ", "SLV", "HND"],
    SLV: ["GTM", "HND"],
    HND: ["GTM", "SLV", "NIC"],
    NIC: ["HND", "CRI"],
    CRI: ["NIC", "PAN"],
    PAN: ["CRI"]
}

//Uses Breadth First Search to search through our graph to find shortest path (O(Vertices + Edges))
export function routeFinder(destination) {
    const queue = [["USA"]];
    const visited = new Set(["USA"]);

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