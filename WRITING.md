# 글 쓰는 법

글 하나 = `_posts/` 폴더에 마크다운 파일 하나. 올리면 GitHub Pages가 1~2분 안에 사이트에 반영해요.

## 1. 파일 만들기

이름은 반드시 `YYYY-MM-DD-주소에-쓸-이름.md` 형식으로 해요.

```
_posts/2026-11-20-isleday-island-renderer.md
```

이 글은 `https://gonami-gennnmja.github.io/blog/2026/11/20/isleday-island-renderer/` 주소로 열려요.

GitHub 웹에서 바로 쓸 수도 있어요.
리포 → `_posts` 폴더 → **Add file → Create new file** → 쓰고 **Commit changes**.

## 2. 맨 위에 머리말 붙이기

```markdown
---
title: 섬 렌더러를 다시 짠 이야기
description: 목록에 한 줄로 나오는 요약 (없어도 됨)
tags: [isleday, swift]
lang: ko
---

여기부터 본문. 마크다운 그대로 쓰면 돼요.
```

- `title`: 꼭 필요해요.
- `description`, `tags`: 있으면 목록과 링크 미리보기에 나와요.
- `lang: ko`: 한국어 글이면 붙여 주세요.

## 3. 쓸 수 있는 것

- 제목 `##`, `###`, 목록, 표, 인용 `>`
- 코드 블록: ```` ```swift ```` 처럼 언어를 적으면 색이 입혀져요.
- 이미지: `img/posts/` 폴더에 올리고 `![설명](/img/posts/파일.png)`로 넣어요.

## 4. 기타

- 아직 공개하기 싫은 글은 머리말에 `published: false`를 넣으면 올라가지 않아요.
- 새 글은 홈 화면 NOTES.LOG에 최근 3개, `/blog/`에 전부 나와요. RSS는 `/feed.xml`이에요.

## 5. 댓글

글마다 아래에 GitHub 계정으로 다는 댓글(giscus)이 붙어요. 댓글은 이 저장소의 Discussions에 쌓여요.
어떤 글에서 댓글을 끄고 싶으면 머리말에 `comments: false`를 넣어요.
