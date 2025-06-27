import { Agent, run } from '@openai/agents';


const agent = new Agent({
  name: "Agent",
  instructions: 'You are a helpful assistant.',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})


document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault(); // ✅ prevents page reload

  const message = document.getElementById('message').value;
  document.getElementById('response').textContent = 'Thinking...';

  console.log("Clicked");
  const response = await run(agent, message); // ✅ using 'message', not 'input'
  document.getElementById('response').textContent = response.content;
});
