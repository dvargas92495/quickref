const data = [
  {
      "type": "keyboard",  
     "topic": "Working with lists",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Search bar",                   "c2": "Ctrl-u",        "c3": "⌘-u" },
                { "c1": "Move up / down in search bar", "c2": "Ctrl-j Ctrl-k", "c3": "Ctrl-j Ctrl-k" },
                { "c1": "Search page",                  "c2": "Ctrl-f",        "c3": "⌘-f" },
                { "c1": "Return to page",               "c2": "Ctrl-Enter",    "c3": "⌘-Enter" },
                { "c1": "Daily Notes Page",             "c2": "Alt-d",         "c3": "Ctrl-Shift-d" },
                { "c1": "Follow link under cursor",     "c2": "Ctrl-o",        "c3": "Ctrl-o" },
                { "c1": "Move to start of block",       "c2": "Ctrl-Home",     "c3": "Ctrl-a" },
                { "c1": "Move to end of block",         "c2": "Ctrl-End",      "c3": "Ctrl-e" }
              ]
  },
  {
      "type": "keyboard",  
     "topic": "Blocks",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "New block",                          "c2": "Enter",          "c3": "Enter"          },
                { "c1": "Indent block",                       "c2": "Tab",            "c3": "Tab"      },
                { "c1": "Unindent block",                     "c2": "Shift-Tab",      "c3": "Shift-Tab"  },
                { "c1": "Move block up",                      "c2": "Alt-Shift-Up↑",  "c3": "⌘-Shift-Up↑"  },
                { "c1": "Move block down",                    "c2": "Alt-Shift-Down", "c3": "⌘-Shift-Down"  },
                { "c1": "Newline within block",               "c2": "Shift-Enter",    "c3": "Shift-Enter"  },
                { "c1": "Zoom in to block",                   "c2": "Alt-Right",      "c3": "⌘-. ⌘-Shift-. (Safari / Firefox)"  },
                { "c1": "Zoom out of block",                  "c2": "Alt-Left",       "c3": "⌘-, ⌘-Shift-, (Safari / Firefox)"  },
                { "c1": "Expand subordinate blocks",          "c2": "Ctrl-Down",      "c3": "⌘-Down"  },
                { "c1": "Collapse",                           "c2": "Ctrl-Up",        "c3": "⌘-Up"  },
                { "c1": "Select text in current block",       "c2": "Ctrl-a",         "c3": "⌘-a"  },
                { "c1": "Select current block",               "c2": "Shift-Up↑-Up↑ or Shift-Down-Down",      "c3": "Shift-Up↑-Up↑ or Shift-Down↓-Down"  },
                { "c1": "Select current block + block above", "c2": "Shift-Up↑-Up↑-Up↑", "c3": "Shift-Up↑-Up↑-Up↑"  },
                { "c1": "Select current block + block below", "c2": "Shift-Down-Down-Down", "c3": "Shift-Down↓-Down↓-Down"  },
                { "c1": "Select all blocks on page",          "c2": "Ctrl-Shift-a",   "c3": "⌘-Shift-a"  },
                { "c1": "Jump to start / end of block",       "c2": "Ctrl-Home / Ctrl-End", "c3": "Ctrl-a / Ctrl-e"  },
                { "c1": "Delete to end of block",             "c2": "Ctrl-k",         "c3": "Ctrl-k"  },
                { "c1": "Paste the last text deleted using Ctrl-k", "c2": "Ctrl-y",   "c3": "Ctrl-y"  }
              ]
  },
  {
      "type": "keyboard",  
     "topic": "Sidebar",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Open/create page in Sidebar (from Search bar)", "c2": "Shift-Enter",  "c3": "Shift-Enter" },
                { "c1": "Open link in Sidebar",                          "c2": "Shift-click",  "c3": "Shift-click" },
                { "c1": "Open link in Sidebar (when editing)",           "c2": "Ctrl-Shift-o", "c3": "Ctrl-Shift-o" }
              ]
  },
  {
      "type": "keyboard",  
     "topic": "Search",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Search all pages",                    "c2": "Ctrl-u",          "c3": "⌘-u" },
                { "c1": "Navigate down/up in search dropdown", "c2": "Ctrl-j / Ctrl-k", "c3": "Ctrl-j / Ctrl-k" },
                { "c1": "Search in current page",              "c2": "Ctrl-f",          "c3": "⌘-f" }
              ]
  },
  {
      "type": "keyboard",  
     "topic": "Visuals",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Toggle [[brackets]]",           "c2": "Ctrl-c Ctrl-b",  "c3": "Ctrl-c Ctrl-b" },
                { "c1": "Toggle author avatar",          "c2": "Ctrl-c Ctrl-s",  "c3": "Ctrl-c Ctrl-s" },
                { "c1": "Toggle block preview tooltip",  "c2": "Ctrl-c Ctrl-p",  "c3": "Ctrl-c Ctrl-p" },
                { "c1": "Cycle namespace display",       "c2": "Ctrl-c Ctrl-l",  "c3": "Ctrl-c Ctrl-l" }
              ]
  },
  {
      "type": "keyboard",  
     "topic": "Formatting",
   "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Heading 0",                 "c2": "Ctrl-Alt-0", "c3": "⌘-⌥-0" },
                { "c1": "Heading 1",                 "c2": "Ctrl-Alt-1", "c3": "⌘-⌥-1" },
                { "c1": "Heading 2",                 "c2": "Ctrl-Alt-2", "c3": "⌘-⌥-2" },
                { "c1": "Heading 3",                 "c2": "Ctrl-Alt-3", "c3": "⌘-⌥-3" },
                { "c1": "Bold ",                     "c2": "Ctrl-b",     "c3": "⌘-b" },
                { "c1": "Italics ",                  "c2": "Ctrl-i",     "c3": "⌘-i" },
                { "c1": "Strikethrough",             "c2": "(none)",     "c3": "⌘-y" },
                { "c1": "Highlight ",                "c2": "Ctrl-h",     "c3": "⌘-h ⌘-Shift-h (Safari / Firefox)" },
                { "c1": "Toggle text / TODO / Done", "c2": "Ctrl-Enter", "c3": "⌘-Enter" },
                { "c1": "Web link",                  "c2": "Ctrl-k",     "c3": "⌘-k" }
              ]
  },
  {
      "type": "keyboard",  
     "topic": "Version Control",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Add a new version of the same block",       "c2": "Ctrl-,",       "c3": "Ctrl-," },
                { "c1": "Cycle versions to the right",               "c2": "Ctrl-Shift-.", "c3": "Ctrl-Shift-." },
                { "c1": "Cycle versions to the left",                "c2": "Ctrl-Shift-,", "c3": "Ctrl-Shift-," },
                { "c1": "Expand all versions into their own blocks", "c2": "Ctrl-.",       "c3": "Ctrl-." }
              ]
  },
  {
      "type": "keyboard",  
     "topic": "Other shortcuts",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Pop up helpers",            "c2": "/",      "c3": "/" },
                { "c1": "Undo",                      "c2": "Ctrl-z", "c3": "⌘-z" },
                { "c1": "Redo",                      "c2": "Ctrl-y", "c3": "⌘-Shift-z" },
                { "c1": "Move character for./back.", "c2": "",       "c3": "Ctrl-f / Ctrl-b" },
                { "c1": "Swap characters",           "c2": "",      "c3": "Ctrl+t" }
              ]
  },
  {
      "type": "feature",  
     "topic": "Markdown",
     "items": [
                { "c1": "**Bold**",                           "c2": "" },
                { "c1": "__Italics__",                        "c2": "" },
                { "c1": "~~Strikethrough~~",                  "c2": "" },
                { "c1": "^^highlight^^",                      "c2": "" },
                { "c1": "$$E = mc^2$$",                       "c2": "Latex" },
                { "c1": "`Code`",                             "c2": "inline code" },
                { "c1": "```Code Block```",                   "c2": "Code block" },
                { "c1": "[link](https://www.example.com)",    "c2": "link" },
                { "c1": "![image](www.fillmurray.com/50/50)", "c2": "Image" }
              ]
    },
    {
      "type": "feature",  
     "topic": "functions",
     "items": [
                { "c1": "{{alias: }}", "c2": "{{alias: ((block)) text to display}}" },
                { "c1": "{{attr-table: }}", "c2": "{{attr-table: [[size]]" },
                { "c1": "{{calc: }}", "c2": "{{calc: 4+5 }} or {{calc: ((block)) + ((block))}}" },
                { "c1": "{{character-count}}", "c2": "" },
                { "c1": "{{word-count}}", "c2": "" },
                { "c1": "{{chart: }}", "c2": "" },
                { "c1": "{{date}}", "c2": "" },
                { "c1": "{{diagram}}", "c2": "Add blocks by nesting them under the main {{diagram}} block.  Hold down Option⌥ and drag between two blocks to create a connecting line. Not sure how to remove these lines. Hold down Option⌥ to drag a box to create a group. Delete a group by clicking on it and hitting backspace while your mouse button is down." },
                { "c1": "{{TODO}}", "c2": "{{TODO}} or {{DONE}}" },
                { "c1": "{{encrypt}}", "c2": "Encrypts a block of text with a passphrase that you specify." },
                { "c1": "{{iframe: }}", "c2": "Allows you to embed a website into your Roam page. You can navigate that website just as normal." },
                { "c1": "{{kanban}}", "c2": "Add columns and cards by nesting bullets below the Kanban board. First level nested bullets are columns. Second level nested bullets are cards. Moving cards will move the blocks below." },
                { "c1": "{{mentions: }}", "c2": "Pulls in the “Linked References” and “Unlinked References” sections for a specified page." },
                { "c1": "{{or: }}", "c2": "Create simple dropdown {{or: Apples | Bananas | Carros  }}" },
                { "c1": "{{orphans}}", "c2": "Provide a list of “orphaned” blocks that can’t be found on any page, because their parent block was deleted." },
                { "c1": "{{pdf: }}", "c2": "{{pdf: https://sitepath/file.pdf }} upload a pdf with /up command" },
                { "c1": "{{POMO}}", "c2": "This creates a Pomodoro timer that you can click on to start at 25 min countdown timer with a 5 min break." },
                { "c1": "{{slider}}", "c2": "Creates a slider that you can slide from 1 to 10. For pages with multiple authors, you can see where people have slid their slider to." },
                { "c1": "{{table}}", "c2": "Creates a table in Roam. Add column headings then rows using nested bullets below the {{table}} function." },
                { "c1": "{{TaoOfRoam}}", "c2": "Shows a spinning astrolabe, a favourite icon of Roam Research" },
                { "c1": "{{youtube: }}", "c2": "{{youtube: https://youtu.be/ojwIIzRC8oU}}" }
              ]
    },
    {
      "type": "feature",  
     "topic": "Embeds",
     "items": [
                { "c1": "{{embed: }}",          "c2": "Embeds a block from elsewhere, including all of its children, or a page from elsewhere, without Linked and Unlinked References." },
                { "c1": "{{embed: ((block))}}", "c2": "Block embed" },
                { "c1": "{{embed: [[page]]}}",  "c2": "Page embed" }
              ]
    },
  {
      "type": "feature",  
     "topic": "Queries",
     "items": [
                { "c1": "{{query}}",  "c2": "{{query: what you're looking for }}" },
                { "c1": "and",        "c2": "{{query: {and: [[tagA]] [[tagB]]} }" },
                { "c1": "or",         "c2": "{{query: {or: [[tagA]] [[tagB]]} }" },
                { "c1": "not",        "c2": "{{query: {not: [[tagA]] [[tagB]]} }" },
                { "c1": "between",    "c2": "{{query: {between: [[January 1st, 2020]] [[today]]} }" },
                { "c1": "date operators",      "c2": "today, tomorrow, yesterday, last week, next week, last month, next month"},
                { "c1": "and not",    "c2": "{{query: {and:[[Singapore]] {not:[[London]]} } }}" },
                { "c1": "and between","c2": "{{query: {and: [[TODO]] {between: [[January 1st, 2020]] [[Today]]} } }}" },
                { "c1": "self-reference",   "c2": "After:  {{[[query]]: {and:[[Singapore]] [[London]] {not:[[query]]} } }}" },
                { "c1": "pages",   "c2": "use page name in the query instead of a tag" },
                { "c1": "Examples",   "c2": "{{query: {and: [[Investing]] {or: [[Articles]] [[People]]}}}}\n{{query: {and: [[Investing]] {or: [[Articles]] [[People]]} {not: [[Startups]]} }}}" }
              ]
  },
  {
      "type": "example",  
     "topic": "Queries examples",
     "items": [
                { "c1": "<em>And Or:</em><br/>{{query: {and: [[Investing]] {or: [[Articles]] [[People]]}}}}" },
                { "c1": "<em>And Or Not:</em><br/>{{query: {and: [[Investing]] {or: [[Articles]] [[People]]} {not: [[Startups]]} }}}" },
                { "c1": "<em>Specific dates:</em><br/>{{query: {and: [[TODO]] {between: [[April 8th, 2020]] [[March 7th, 2020]]}}}}" },
                { "c1": "<em>Relative dates:</em><br/>{{query: {and: [[TODO]] {between: [[today]] [[last week]]}}}}" },
                { "c1": "<em>Due today, not Overdue:</em>{{query: {and: [[TODO]] {not: [[Overdue Tasks]]}{between: [[today]] [[today]]}}}}" },
                { "c1": ""}
              ]
  },
  {
      "type": "feature",  
     "topic": "/helpers",
     "items": [
                { "c1": "/TODO",          "c2": "A shortcut for the {{TODO}} function but also makes the TODO a [[page reference]]: {{[[TODO]]}}. This is a function that displays as a checkbox which can be checked by clicking on it. When it is checked, it becomes {{DONE}}." },
                { "c1": "/Current Time",  "c2": "Current time, does not update" },
                { "c1": "/POMO",          "c2": "Pomodoro timer" },
                { "c1": "/Date Picker",   "c2": "Insert a date with a calendar" },
                { "c1": "/Today",         "c2": "Today's date" },
                { "c1": "/Tomorrow",      "c2": "Tomorrows Date" },
                { "c1": "/Yesterday",     "c2": "Yesterdays date" },
                { "c1": "/Bold",          "c2": "" },
                { "c1": "/Italics",       "c2": "" },
                { "c1": "/Highlight",     "c2": "" },
                { "c1": "/Strikethrough", "c2": "" },
                { "c1": "/Code Inline",   "c2": "A shortcut for “ which makes the text in between the backticks format as monospaced text in the middle of a normal sentence," },
                { "c1": "/Code Block",    "c2": "Insert program snippets of code" },
                { "c1": "/Latex",         "c2": "Example: $$x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$$" },
                { "c1": "/Calc",          "c2": "Inline calculator" },
                { "c1": "/Upload",        "c2": "upload image or file" },
                { "c1": "/Slider",        "c2": "function that displays as a graphical slider from 1-10 with a number selected. Perhaps useful for visually rating things." },
                { "c1": "/Encrypt",       "c2": "Encrypts text" },
                { "c1": "/Diagaram",      "c2": "Insert diagram" },
                { "c1": "/Table",         "c2": "Insert a table" },
                { "c1": "/Kanban",        "c2": "Insert a kanban board" },
                { "c1": "/YouTube",       "c2": "YouTube video" },
                { "c1": "/Mentions",      "c2": "Insert Mentios" },
                { "c1": "/Word Count",    "c2": "Insert word count for page" },
                { "c1": "/Query",         "c2": "See query secition" }
              ]
  },
    {
      "type": "feature",  
     "topic": "#roamcult",
     "items": [
                { "c1": "<a href='https://forum.roamresearch.com/' target='_blank'>Roam Support Forums</a>",  
                  "c2": "The official place for discussing roam" },
                { "c1": "<a href='https://roamhacks.com' target='_blank'>roamhacks.com</a>", 
                  "c2": "Great summary of roam featurs. Also major source of help for this quick reference" },
                { "c1": "<a href='https://twitter.com/search?q=%23roamcult' target='_blank'>Twitter</a>", 
                  "c2": "Twitter: Follow @roamresearch and the founder Conor White-Sullivan’s account @Conaw. Search for the <a href='https://twitter.com/search?q=%23roamcult' target='_blank'>#roamcult</a> hashtag!" },
                { "c1": "<a href='https://www.roambrain.com/' target='_blank'>https://www.roambrain.com/</a>",  
                  "c2": "Enter the deep theory of roam and its culture" },
                { "c1": "<a href='https://www.roamtips.com/' target='_blank'>roamtips.com</a>",  
                  "c2": "useful tips to help you master roam" },
                { "c1": "<a href='https://twitter.com/RoamFm' target='_blank'>RoamFM Podcast</a>",  
                  "c2": "Conversations with #roamcult"},
                { "c1": "<a href='https://twitter.com/RoamHacker' target='_blank'>@RoamHacker</a>",  
                  "c2": "RoamHacker at twitter"}
                // { "c1": "<a href='' target='_blank'></a>",  "c2": ""},
              ]
  },
  {
      "type": "example",  
     "topic": "About",
     "items": [
                { "c1": "This tools is designed to be a quick reference to all the features of Roam via keyboard, functions and formatting.<br/><br/>" },
                { "c1": "Follow me on Twitter at <a href='https://twitter.com/roamhacker' target='_blank'>@RoamHacker</a>. <br/>DM me with bugs, suggestions and whatever.<br/><br/>" },
                { "c1": "If RoamMonkey is installed, here are some custom keyboard enhancements.<br/><br/>Alt+Shift+/  Toggle sidebar" }      
              ]
  }

 


  // ,
  // {
  //     "type": "keyboard",  
  //    "topic": "",
  //   "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
  //    "items": [
  //               { "c1": "", "c2": "", "c3": ""},
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" }
  //            ]
  // }

  // ,
  // {
  //     "type": "feature",  
  //    "topic": "",
  //    "items": [
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""}
  //             ]
  // }

  // ,
  // {
  //     "type": "example",  
  //    "topic": "",
  //    "items": [
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""}
  //             ]
  // }

]

export default data
