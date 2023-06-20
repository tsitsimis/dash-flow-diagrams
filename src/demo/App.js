/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashFlow, MiniMap, Background, Controls } from '../lib';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [
                {
                    id: '1',
                    data: {
                        html: `<div style="height: 50px; border: 1px solid #eee; padding: 5px; borderRadius: 5px; background: white">
                        <span style="fontSize: 10px; fontWeight: bold; color: red">zipcode</span>
                        <br/>
                        <span>dbo.addresses</span>
                        <div data-handlepos="right" class="react-flow__handle react-flow__handle-right source"></div>
                        </div>
                        `
                    },
                    type: 'customNode',
                    position: { x: 250, y: 0 },
                    sourcePosition: 'right',
                    targetPosition: 'left',
                    width: 150,
                    height: 35,
                },
                {
                    id: '2',
                    data: {
                        label: "Default Node"
                    },
                    position: { x: 100, y: 100 },
                    sourcePosition: 'right',
                    targetPosition: 'left',
                    width: 150,
                    height: 35,
                },
                {
                    id: '3',
                    data: {
                        label: 'Heyyy',
                    },
                    position: { x: 300, y: 100 },
                    sourcePosition: 'right',
                    targetPosition: 'left',
                    width: 150,
                    height: 35,
                },
            ],
            edges: [
                {id: 'e1-2', source: '1', target: '2', label: 'process', "type": "step"},
                {id: 'e1-3', source: '1', target: '3', animated: true, label: 'process 1-3'},
            ],
            dagre_direction: "LR",
            nodesDraggable: true,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashFlow
                    setProps={this.setProps}
                    {...this.state}
                >
                    <MiniMap/>
                    <Background color="#aaa" gap={16}/>
                    <Controls/>
                </DashFlow>
            </div>
        )
    }
}

export default App;
