/**
 * Converts markdown text to HTML with GitHub-style formatting
 * @param {string} markdown - The markdown text to convert
 * @returns {string} The formatted HTML
 */
export function formatter(markdown) {
    if (!markdown) return '';
    let html = markdown;
  
    // Store code blocks to prevent interference with other formatting
    const codeBlocks = [];
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, language, code) => {
      const index = codeBlocks.length;
      codeBlocks.push({ language, code: code.trim() });
      return `<!--CODE_BLOCK_${index}-->`;
    });
  
    // Store inline code to prevent interference
    const inlineCodes = [];
    html = html.replace(/`([^`]+)`/g, (match, code) => {
      const index = inlineCodes.length;
      inlineCodes.push(code);
      return `<!--INLINE_CODE_${index}-->`;
    });
  
    // Headers
    html = html.replace(/^#{6}\s+(.+)$/gm, '<h6>$1</h6>');
    html = html.replace(/^#{5}\s+(.+)$/gm, '<h5>$1</h5>');
    html = html.replace(/^#{4}\s+(.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^#{3}\s+(.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^#{2}\s+(.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^#{1}\s+(.+)$/gm, '<h1>$1</h1>');
  
    // Bold and Italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
    // Process lists with nesting
    const processLists = (text) => {
      let processed = text;
      
      // Handle ordered lists with nested unordered lists
      processed = processed.replace(
        /(?:^\d+\.\s+(?:[^\n]+)(?:\n\s*[-*]\s+[^\n]+)*\n?)+/gm,
        match => {
          const sections = match.split(/(?=^\d+\.)/m);
          
          return '<ol>\n' + sections.map(section => {
            const [mainItem, ...subItems] = section.trim().split('\n');
            const mainContent = mainItem.replace(/^\d+\.\s+/, '');
            
            if (subItems.length === 0) {
              return `<li>${mainContent}</li>`;
            }
            
            const subList = subItems.map(item => {
              const indentedContent = item.replace(/^\s*[-*]\s+/, '');
              return `<li>${indentedContent}</li>`;
            }).join('\n');
            
            return `<li>${mainContent}\n<ul>\n${subList}\n</ul>\n</li>`;
          }).join('\n') + '\n</ol>';
        }
      );
  
      // Handle any remaining unordered lists
      processed = processed.replace(
        /(?:^\s*[-*]\s+.+(?:\n|$))+/gm,
        match => {
          const items = match.trim().split('\n');
          const listItems = items.map(item => 
            `<li>${item.replace(/^\s*[-*]\s+/, '')}</li>`
          ).join('\n');
          return `<ul>\n${listItems}\n</ul>`;
        }
      );
  
      return processed;
    };
  
    // Apply list processing
    html = processLists(html);
  
    // Links
    html = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );
  
    // Blockquotes
    html = html.replace(/^>\s(.+)$/gm, '<blockquote>$1</blockquote>');
  
    // Horizontal rules
    html = html.replace(/^(?:[\t ]*(?:[-*_])){3,}(?:[\t ]*$)/gm, '<hr>');
  
    // Paragraphs
    html = html.replace(/^(?!<[a-z]+).+$/gm, '<p>$&</p>');
  
    // Restore code blocks with syntax highlighting and language
    html = html.replace(/<!--CODE_BLOCK_(\d+)-->/g, (match, index) => {
      const { language, code } = codeBlocks[parseInt(index)];
      const languageClass = language ? ` class="language-${language}"` : '';
      return `<pre><code${languageClass}>${escapeHtml(code)}</code></pre>`;
    });
  
    // Restore inline code with proper spacing
    html = html.replace(/<!--INLINE_CODE_(\d+)-->/g, (match, index) => {
      const code = inlineCodes[parseInt(index)];
      return `<code style="padding:2px 6px">${escapeHtml(code)}</code>`;
    });
  
    // Clean up empty paragraphs and fix nested paragraphs
    html = html.replace(/<p>\s*<\/p>/g, '');
    html = html.replace(
      /<p>(<\/?(?:h[1-6]|ul|ol|li|blockquote|hr|pre)[^>]*>)<\/p>/g,
      '$1'
    );
  
    return html;
  }
  
  /**
   * Escapes HTML special characters to prevent XSS
   * @param {string} text - The text to escape
   * @returns {string} The escaped text
   */
  function escapeHtml(text) {
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return text.replace(/[&<>"']/g, (char) => htmlEntities[char]);
  }