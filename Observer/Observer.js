function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.Add = function(obj) {
    return this.observerList.push(obj);
}

ObserverList.prototype.Empty = function() {
    return this.observerList = [];
}

ObserverList.prototype.Count = function() {
    return this.observerList.length;
}

ObserverList.prototype.Get = function(index) {
    if(index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.Insert = function(obj, index) {
    var pointer = -1;
    if(0 === index) {
        this.observerList.unshift(obj);
        pointer = index;
    } else if(index === this.observerList.length) {
        this.observerList.push(obj);
        pointer = index;
    }
    return pointer;
}

ObserverList.prototype.IndexOf = function(obj, startIndex) {
    var i = startIndex,
        pointer = -1;
    while(i < this.observerList.length) {
        if(this.observerList[i] === obj) {
            pointer = i;
        }
        i++;
    }
    return pointer;
}

ObserverList.prototype.RemoveIndexAt = function(index) {
    if(index === 0) {
        this.observerList.shift();
    } else if(index = this.observerList.length -1) {
        this.observerList.pop();
    }
}

//扩展函数
function extend(obj, extension) {
    for(var key in obj) {
        extension[key] = obj[key];
    }
}

function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function(observer) {
    this.observers.Add(observer);
}

Subject.prototype.RemoveObserver = function(observer) {
    this.observers.RemoveIndexAt(this.observers.IndexOf(observer,0));
}

Subject.prototype.Notify = function(context) {
    var observerCount = this.observers.Count();
    for(var i = 0; i < observerCount; i++) {
        this.observers.Get(i).Update(context);
    }
}

function Observer() {
    this.Update = function() {

    };
}





























