# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''Controls <- function(id=NULL, className=NULL, onFitView=NULL, onInteractiveChange=NULL, onZoomIn=NULL, onZoomOut=NULL, showFitView=NULL, showInteractive=NULL, showZoom=NULL, style=NULL) {
    
    props <- list(id=id, className=className, onFitView=onFitView, onInteractiveChange=onInteractiveChange, onZoomIn=onZoomIn, onZoomOut=onZoomOut, showFitView=showFitView, showInteractive=showInteractive, showZoom=showZoom, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Controls',
        namespace = 'dash_flow_diagrams',
        propNames = c('id', 'className', 'onFitView', 'onInteractiveChange', 'onZoomIn', 'onZoomOut', 'showFitView', 'showInteractive', 'showZoom', 'style'),
        package = 'dashFlowDiagrams'
        )

    structure(component, class = c('dash_component', 'list'))
}
