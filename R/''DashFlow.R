# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashFlow <- function(children=NULL, id=NULL, clickedEdge=NULL, clickedNode=NULL, connectedEdge=NULL, dagre_direction=NULL, edges=NULL, nodes=NULL) {
    
    props <- list(children=children, id=id, clickedEdge=clickedEdge, clickedNode=clickedNode, connectedEdge=connectedEdge, dagre_direction=dagre_direction, edges=edges, nodes=nodes)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashFlow',
        namespace = 'dash_flow_diagrams',
        propNames = c('children', 'id', 'clickedEdge', 'clickedNode', 'connectedEdge', 'dagre_direction', 'edges', 'nodes'),
        package = 'dashFlowDiagrams'
        )

    structure(component, class = c('dash_component', 'list'))
}
