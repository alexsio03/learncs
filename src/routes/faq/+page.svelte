<script>
  let questions = [
    {
      question: "What is Computer Science?",
      answer: "Computer Science is the study of computers and computational systems. It involves the theory, design, development, and application of software and hardware components."
    },
    {
      question: "Is Computer Science a hard major?",
      answer: "Computer Science can be challenging, but it also depends on your interest and dedication. With proper study habits and practice, it is definitely achievable."
    },
    {
      question: "What are some common areas of Computer Science and what do they do?",
      answer: "Some common areas of Computer Science include software development, artificial intelligence, data science, cybersecurity, and computer networks. Each area focuses on different aspects of computing and has its own set of applications and techniques."
    },
    {
      question: "Does Computer Science pay well?",
      answer: "Computer Science offers a wide range of career opportunities with competitive salaries. The earning potential can vary depending on factors such as job role, experience, and location."
    },
    {
      question: "What programming languages are commonly used in Computer Science?",
      answer: "Some commonly used programming languages in Computer Science include Java, Python, C++, JavaScript, and Ruby. The choice of programming language depends on the specific application and requirements."
    },
    {
      question: "What skills are important for a Computer Science professional?",
      answer: "Some important skills for a Computer Science professional include problem-solving, critical thinking, programming, data analysis, communication, and teamwork. These skills are essential for success in the field."
    },
    {
      question: "What are the career prospects in Computer Science?",
      answer: "Computer Science offers a wide range of career prospects, including software engineer, data scientist, cybersecurity analyst, artificial intelligence specialist, and network administrator. The demand for skilled professionals in these areas is expected to grow in the coming years."
    }
  ];
</script>

<div class="flex flex-col h-screen dark:bg-zinc-800 dark:text-zinc-400 p-6">
  <h1 class="text-4xl mx-auto text-zinc-300 font-bold mb-4">FAQ</h1>
  
  {#each questions as { question, answer }}
    <div class="mb-4">
      <h2 class="text-2xl text-zinc-400 py-2 font-semibold">{question}</h2>
      <p>- {answer}</p>
    </div>
  {/each}
</div>
