## 제목 작성

```
# 제목

## 제목

### 제목

#### 제목

##### 제목

###### 제목

```

## 문단 구분을 위한 강제 개행

문단을 구별하려면 한 개 이상의 빈 줄을 문단 사이에 삽입하거나, 줄의 마지막에 [Space Bar] 를 두 번 이상 눌러 띄어쓰기를 하면 됩니다.

## 리스트 작성

Unordered

- Item 1
- Item 2
  - Item 2a
  - Item 2b

Ordered

1. Item 1
1. Item 2
1. Item 3 1. Item 3a 1. Item 3b

```
Unordered
* Item 1
* Item 2
    * Item 2a
    * Item 2b

Ordered
1. Item 1
1. Item 2
1. Item 3
    1. Item 3a
    1. Item 3b

```

## 이미지(Images)

```
첫번째 방법
![Github logo](/images/markdown_logo.jpg)


두번째 방법
<a href="#"><img src="https://github.com/..각자절대경로../images/markdown_syntax.jpg" width="400px" alt="sample image"></a>

```

## Bold

```
I just love **bold text**.
```

I just love **bold text**.

## Italic

```
Italicized text is the *cat's meow*.
```

Italicized text is the _cat's meow_.

## Blockquotes

```
> Dorothy followed her through many of the beautiful rooms in her castle.
```

## Blockquotes with Other Elements

```
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>   _Everything_ is going according to **plan**.

## Horizontal Rules

```
***

---

_________________
```

---

---

---

## Links

```
 engine is [Duck Duck Go](https://duckduckgo.com).
```

engine is [Duck Duck Go](https://duckduckgo.com).

## Tables

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

## Alignment

```
| `Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```

## Code Blocks

코드 블록은 일반적으로 공백 4개 또는 탭 1개로 들여쓰기됩니다. 목록에 있으면 공백 8개 또는 탭 2개를 들여씁니다.

```
1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3. Update the title to match the name of your website.
```

## Fenced Code Blocks

````
 ```json
 {
 "firstName": "John",
 "lastName": "Smith",
 "age": 25
 }
 ```
````

## Footnotes

```
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

## Heading IDs

```
### My Great Heading {#custom-id}
```

## Linking to Heading IDs

| Markdown                                             | Rendered Output                                   |
| ---------------------------------------------------- | ------------------------------------------------- |
| `[Heading IDs](#heading-ids)`                        | <a href="#heading-ids">Heading IDs</a>            |
| `[linking-to-heading-ids](#linking-to-heading-ids) ` | [linking-to-heading-ids](#linking-to-heading-ids) |

## Strikethrough

```
~~The world is flat.~~ We now know that the world is round.
```

~~The world is flat.~~ We now know that the world is round.

## Task Lists

```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Highlight

```
I need to highlight these <mark>very important words</mark>.
```

I need to highlight these <mark>very important words</mark>.

## Disabling Automatic URL Linking

```
`http://www.example.com`
```

`http://www.example.com`
