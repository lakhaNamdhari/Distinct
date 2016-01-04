// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// BST
function BST( data ){
	var root, createNode;

	// Creates tree node
	createNode = function( data ){
		return {
			left: null,
			data: data,
			right: null
		};
	};

	root = createNode( data );

	// Inserts new node in tree, if it doesn't already exist
	this.insert = function( data ){
		var node, next = root, newNode;

		// Traverse tree to find position for new node
		while ( next !== null ){
			node = next; 
			next = data < node.data ? node.left : node.right;

			if ( data === node.data ){
				return -1;
			}
		}

		newNode = createNode( data );
		if ( data < node.data ){
			node.left = newNode;
		}else{
			node.right = newNode;
		}

		return data;
	};
}

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var tree, counter = 0, i;

    if ( A.length > 0 ){
    	tree = new BST( A[0] );
    	counter++;

	    for ( i = 1; i < A.length; i++ ){
	    	if ( tree.insert( A[i] ) === A[i] ){
	    		counter++
	    	}
	    }
    }

    return counter;
}

