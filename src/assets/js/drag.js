// Drag-n-Drop

var $tasks, $cols;

const Drag = {
    init: function() {
        this.updateElements();

        if($tasks) {
            [].forEach.call($tasks, el => {
                el.addEventListener('dragend', dragEnd, false);
            })
        }
        
        if($cols) {
            [].forEach.call($cols, el => {
                el.addEventListener('dragenter', dragEnter, false);
                el.addEventListener('dragleave', dragLeave, false);
                el.addEventListener('dragover', dragOver, false);
                el.addEventListener('drop', dragDrop, false);
            })
        }
        
        function dragStart(ev) {
            ev.dataTransfer.dropEffect = 'move';
            ev.dataTransfer.setData('text', ev.target.getAttribute('id'));
        }
        
        function dragEnter() {
            var add = document.createElement('div');
            add.classList.add('enter-task');
            this.children.length == 0 ? this.appendChild(add) : this.insertBefore(add, this.children[0]);
        }
        
        function dragLeave() {
            var addTask = this.querySelector('.enter-task');
            addTask.parentNode.removeChild(addTask);
        }
        
        function dragOver(ev) {
            ev.preventDefault();
        }
        
        function dragDrop(ev) {
            ev.preventDefault();
        
            var elID = ev.dataTransfer.getData('text');
            var el = document.getElementById(elID);
            
            this.children.length == 0 ? this.appendChild(el) : this.insertBefore(el, this.children[0]);
        
            var addTask = this.querySelector('.enter-task');
            addTask.parentNode.removeChild(addTask);
        }
        
        function dragEnd(ev) {
            ev.preventDefault();
        }
    },

    updateElements: function() {
        $tasks = document.querySelectorAll('.task');
        $cols = document.querySelectorAll('.col-body');
    }
}

export default Drag;