export class NodeService {
    static getTreeNodes() {
        // Example data structure for the tree nodes
        return Promise.resolve([
            {
                key: '0',
                label: 'Root',
                children: [
                    { key: '0-0', label: 'Child 1' },
                    { key: '0-1', label: 'Child 2' }
                ]
            }
        ]);
    }
}