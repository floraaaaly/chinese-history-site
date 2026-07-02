// 自动交链：把正文里出现的 人物 / 事件 / 诗词 / 脉络 名称，自动变成可点链接。
// 这是「网状记忆」落到阅读体验的关键——每一段文字都成为网的一部分。
import events from '../data/events.json';
import people from '../data/people.json';
import poems from '../data/poems.json';
import threads from '../data/threads.json';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

type Term = { term: string; url: string; type: string };

const raw: Term[] = [];
people.forEach((p) => raw.push({ term: p.name, url: `${base}person/${p.id}`, type: 'person' }));
events.forEach((e) => raw.push({ term: e.title, url: `${base}event/${e.id}`, type: 'event' }));
poems.forEach((p) => raw.push({ term: p.title, url: `${base}poem/${p.id}`, type: 'poem' }));
threads.forEach((t) => raw.push({ term: t.title, url: `${base}thread/${t.id}`, type: 'thread' }));

// 去重（同名保留先出现的），按长度降序（优先匹配最长词，避免「王莽」抢了「王莽篡汉」）
const seen = new Set<string>();
const TERMS = raw
  .filter((t) => t.term && t.term.length >= 2 && !seen.has(t.term) && seen.add(t.term))
  .sort((a, b) => b.term.length - a.term.length);

function escChar(c: string): string {
  return c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c;
}

/**
 * 把 text 中出现的实体名称包成 <a class="xlink">。
 * 每个目标只链接首次出现，避免同一段里重复刷屏。
 * selfUrl：当前页自身的 url，跳过（不自链）。
 */
export function autolink(text: string, selfUrl?: string): string {
  if (!text) return '';
  const usedUrl = new Set<string>();
  let out = '';
  let i = 0;
  while (i < text.length) {
    let m: Term | null = null;
    for (const t of TERMS) {
      if (t.url === selfUrl || usedUrl.has(t.url)) continue;
      if (text.startsWith(t.term, i)) { m = t; break; }
    }
    if (m) {
      out += `<a class="xlink xlink-${m.type}" href="${m.url}">` +
        [...m.term].map(escChar).join('') + '</a>';
      usedUrl.add(m.url);
      i += m.term.length;
    } else {
      out += escChar(text[i]);
      i++;
    }
  }
  return out;
}
