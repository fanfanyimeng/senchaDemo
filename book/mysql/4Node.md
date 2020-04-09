# MySQL for NodeJS

* 在项目中安装mysql

```
npm install mysql --save
```

* 项目代码中引用

```
//引入mysql
var mysql=require('mysql');
//创建链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'yf',
    password: '123456',
    database: 'yf'
})
```

* 查询

```
function select() {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting:' + err.stack)
        }
        console.log('connected as id ' + connection.threadId);
    })

    connection.query('SELECT * FROM demo', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is:', results);
    });
    connection.end();
```

* 添加

```
function add() {
    let post = {
        id: 1,
        name: 'Hello MySql',
        age: 20,
        time: Date.now(),
        temp: 'deom'
    };
    let query = connection.query("INSERT INTO demo SET ?", post, function (error, results, fields) {
        if (error) throw error;
    })
    console.log(query.sql); //INSERT INTO posts 'id'=1, 'title'='Hello MySQL'
}
```

* 修改

```
function updeate() {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting:' + err.stack);
        }
        console.log('connected as id ' + connection.threadId);
    });

    connection.query('UPDATE demo SET name=?where id?', ['update', 1], function (error, results, fields) {
        if (error) throw error;
        console.log('changed:' + results.changeRows + 'rows');
    });

    connection.end();
}
```

* 删除

```
function deletes() {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting:' + err.stack);
            return;
        }
        connection.query('DELETE FROM demo SET where id=?', [ 1], function (error, results, fields) {
            if (error) throw error;
            console.log('deleted:' + results.affectedRows + 'rows');
        });
        console.log('connected as id ' + connection.threadId);
        connection.end();

    });

}
```



