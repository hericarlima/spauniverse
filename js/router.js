export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        pathname == "/" ? document.body.style.backgroundImage = "url('../assets/mountains1.png')" : "url(../pages/404.html)"
        pathname == "/universe" ? document.body.style.backgroundImage = "url('../assets/mountains2.png')" : "url(../pages/404.html)"
        pathname == "/exploration" ? document.body.style.backgroundImage = "url('../assets/mountains3.png')" : "url(../pages/404.html)"
        pathname == "/404" ? document.body.style.backgroundImage = "url('../assets/mountains1.png')" : "url(../pages/404.html)"

        fetch(route)
            .then(data => data.text())
            .then(html => {document.querySelector('.app').innerHTML = html})
    }
}