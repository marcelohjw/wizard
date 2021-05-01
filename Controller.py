import web

urls = (
    '/', 'home',
    '/register', 'register',
    '/postregstration', 'PostRegistration'
)

render = web.template.render("Views/Templates", base="MainLayout")
app = web.application(urls, globals())


# Classes & Routes

class home:
    def GET(self):
        return render.home()


class register:
    def GET(self):
        return render.register()

class PostRegistration:
    def POST(self):
        data = web.input()
        return data.username


if __name__ == "__main__":
    app.run()
