class TrieNode {
  children: Map<string, TrieNode>;
  isTerminal: boolean;

  constructor() {
    this.children = new Map();
    this.isTerminal = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isTerminal = true;
  }
  search(word: string) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isTerminal;
  }
  startsWith() {}
  print(): void {
    const words: string[] = [];
    const traverse = (node: TrieNode, prefix: string) => {
      if (node.isTerminal) {
        words.push(prefix);
      }
      for (const [char, childNode] of node.children) {
        traverse(childNode, prefix + char);
      }
    };
    traverse(this.root, "");
    console.log(words.join(", "));
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("apply");
trie.insert("fountain");
trie.insert("fount");
trie.insert("fountainhead");
trie.print();
console.log("search apple: ", trie.search("apple")); // true
console.log("search apply: ", trie.search("apply")); // true
console.log("search amber: ", trie.search("amber")); // true
console.log("search pencil: ", trie.search("pencil")); // true
console.log("search fountainhead: ", trie.search("fountainhead")); // true
