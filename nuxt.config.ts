const environment = process.env.NODE_ENV || "development"

// Dynamically import the correct config and re-export it
const loadConfig = async () => {
  console.log(environment)
  const config = await import(`./configs/${environment}.ts`)
  return defineNuxtConfig(config.default)
}

export default await loadConfig()
