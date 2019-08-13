# Test title

This is a test post to demonstrate loading of markdown from a file into javascript.

## By Example
Below are a few examples of random code from some of my projects.

```go
func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello GitHub user!")
}
```

Let’s look at the above example in more detail, broken apart to see what’s going on.

We begin by importing the libraries :

```go
package main
import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"
	"sort"
)
```

Define a regex for github usernames:

```go
var reGithubUsername = regexp.MustCompile(`(?i)^([a-z\d]+-)*[a-z\d]+$`)
```

And that's it! Decent test post.
