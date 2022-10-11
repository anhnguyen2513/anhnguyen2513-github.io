import { 
    TYPE_LOG,
    TYPE_WARN
} from './constants.js'

function logger(log, type = TYPE_WARN){
    console[type](log)
}

export default logger;