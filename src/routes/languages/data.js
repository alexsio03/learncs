export const languageData = [
	{
		id: "c",
		name: "C",
		date: "Created in 1972",
		usage: "Used in operating systems, embedded systems, and hardware drivers",
		description: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems."
	},
	{
		id: "cplus",
		name: "C++",
		date: "Created in 1983",
		usage: "Used in operating systems, video games, and web browsers",
		description: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms."
	},
	{
		id: "csharp",
		name: "C#",
		date: "Created in 2000",
		usage: "Used in Windows applications, video games, and mobile apps",
		description: "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed around 2000 by Microsoft as part of its .NET initiative and later approved as an international standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2018). Mono is the name of the free and open-source project to develop a compiler and runtime for the language. C# is one of the programming languages designed for the Common Language Infrastructure."
	},
	{
		id: "go",
		name: "Go",
		date: "Created in 2009",
		usage: "Used in network programming, cloud computing, and web development",
		description: "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. The language is often referred to as 'Golang' because of its domain name, golang.org, but the proper name is Go."
	},
	{
		id: "rust",
		name: "Rust",
		date: "Created in 2010",
		usage: "Used in operating systems, web browsers, and game engines",
		description: "Rust is a multi-paradigm programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references. Rust achieves memory safety without garbage collection, and reference counting is optional. Rust was originally designed by Graydon Hoare at Mozilla Research, with contributions from Dave Herman, Brendan Eich, and others. The designers refined the language while writing the Servo layout or browser engine, and the Rust compiler. The compiler is free and open-source software dual-licensed under the MIT License and Apache License 2.0."
	},
	{
		id: "swift",
		name: "Swift",
		date: "Created in 2014",
		usage: "Used in iOS, macOS, watchOS, and tvOS applications",
		description: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community, first released in 2014. Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. Swift works with Apple's Cocoa and Cocoa Touch frameworks, and a key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. It is built with the open-source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms, it uses the Objective-C runtime library which allows C, Objective-C, C++ and Swift code to run within one program."
	},
	{
		id: "java",
		name: "Java",
		date: "Created in 1995",
		usage: "Used in web development, mobile development, and enterprise applications",
		description: "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client-server web applications, with a reported 9 million developers."
	},
	{
		id: "python",
		name: "Python",
		date: "Created in 1991",
		usage: "Used in web development, data analysis, and artificial intelligence",
		description: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming. Python is often described as a 'batteries included' language due to its comprehensive standard library."
	},
	{
		id: "javascript",
		name: "JavaScript",
		date: "Created in 1995",
		usage: "Used in web development, mobile development, and game development",
		description: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on the user's device."
	},
	{
		id: "html",
		name: "HTML",
		date: "Created in 1993",
		usage: "Used in web development",
		description: "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."
	},
	{
		id: "css",
		name: "CSS",
		date: "Created in 1996",
		usage: "Used in web development",
		description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content."
	},
	{
		id: "php",
		name: "PHP",
		date: "Created in 1994",
		usage: "Used in web development",
		description: "PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor. PHP code may be embedded into HTML code, or it can be used in combination with various web template systems, web content management systems, and web frameworks. PHP code is usually processed by a PHP interpreter implemented as a module in a web server or as a Common Gateway Interface (CGI) executable. The web server outputs the results of the interpreted and executed PHP code, which may be any type of data, such as generated HTML code or binary image data. PHP can be used for many programming tasks outside of the web context, such as standalone graphical applications and robotic drone control."
	},
	{
		id: "sql",
		name: "SQL",
		date: "Created in 1974",
		usage: "Used in database management",
		description: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables. SQL offers two main advantages over older read/write APIs like ISAM or VSAM. First, it introduced the concept of accessing many records with one single command. Second, it eliminates the need to specify how to reach a record, e.g. with or without an index."
	},
	{
		id: "assembly",
		name: "Assembly",
		date: "Created in 1947",
		usage: "Used in low-level programming, device drivers, and embedded systems",
		description: "Assembly language is a low-level programming language that is specific to a particular computer architecture. It is often used for writing device drivers, operating systems, and other software that requires direct access to hardware. Assembly language programs are written using mnemonic codes that represent specific machine instructions. These programs are then assembled into machine code that can be executed by the computer's processor. Assembly language provides a high level of control over the computer's hardware, but it is also more difficult to write and understand compared to higher-level programming languages."
	},
{
	id: "ruby",
	name: "Ruby",
	date: "Created in 1995",
	usage: "Used in web development, scripting, and automation",
	description: "Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan. Ruby is known for its simplicity and productivity, with an elegant syntax that is easy to read and write. It has a strong focus on developer happiness and emphasizes the principle of least surprise. Ruby has a rich ecosystem of libraries and frameworks, making it a popular choice for web development, scripting, and automation tasks."
},
{
	id: "lua",
	name: "Lua",
	date: "Created in 1993",
	usage: "Used in game development, embedded systems, and scripting",
	description: "Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. It was created in 1993 by Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes. Lua is known for its simplicity, efficiency, and flexibility. It has a small and clean syntax, making it easy to learn and use. Lua is often used as a scripting language in game development, where its fast execution speed and small memory footprint are highly valued. It is also used in embedded systems and as a general-purpose scripting language."
}
]
