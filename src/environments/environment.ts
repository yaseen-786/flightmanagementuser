export const environment = {
    production:false,
    // apiUrl:'http://127.0.0.1:8081/'
    apiUrl: (window as { [key: string]: any })['env']['apiUrl'] || 'default',
}