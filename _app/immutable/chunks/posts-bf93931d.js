import"./index-0777ab62.js";const i=e=>e.title?"article":e.image?"photo":e.audio?"audio":e.video?"video":e.bookmark_of?"bookmark":e.like_of?"like":e.repost_of?"repost":e.in_reply_to?"reply":"note",a=e=>[...new Set(e.reduce((t,o)=>o.tags?[...t,...o.tags]:t,[""]).slice(1))];export{a as g,i as t};
