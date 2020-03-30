import path from 'path'
import fs from 'fs'

const filesFromDir = dir =>
  fs
    .readdirSync(dir)
    .filter(file => file.match(/\.js$/gi))
    .map(filename => `${dir}/${filename}`)

const getControllerFiles = () => {
  const rootPath = path.resolve(__dirname, './routes')

  const rootControllers = filesFromDir(rootPath)

  return [...rootControllers]
}

const register = (server, handler) => {
  getControllerFiles().forEach(controllerFile => {
    const controllerModule = require(controllerFile) // eslint-disable-line
    const md = controllerModule.default || controllerModule
    if (md.init) md.init(server, handler)
  })

  server.use((req, res, next) =>
    !req.route
      ? next(new Error(`Route not found "${req.method} ${req.path}"`))
      : next(),
  )
}

export default {
  register,
}
