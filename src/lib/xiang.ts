// 意象之网：逐首据诗中真实意象提炼的核心意象词汇 → 诗（一首诗归属其含有的多个意象）
// 诗境页与诗词详情页共用，保证「意象为网」在全站一致
export const xiangGroups: { name: string; ids: string[] }[] = [
  { name: '山', ids: ['duan-ge-xing', 'chun-wang', 'man-jiang-hong', 'jiang-xue', 'yin-jiu-wu', 'shan-ju-qiu-ming', 'chu-sai', 'yong-yu-le-jingkou', 'zuoqian-languan', 'guo-guren-zhuang', 'yu-jia-ao', 'guan-cang-hai', 'bo-chuan-guazhou', 'shi-hui-yin', 'baixuege'] },
  { name: '江河', ids: ['duan-ge-xing', 'jiang-xue', 'shan-ju-qiu-ming', 'yu-mei-ren', 'nian-nu-jiao-chibi', 'yong-yu-le-jingkou', 'zuoqian-languan', 'guo-ling-tan', 'jiang-jin-jiu', 'deng-gao', 'guan-cang-hai', 'xiari-jueju'] },
  { name: '月', ids: ['jing-ye-si', 'shan-ju-qiu-ming', 'chu-sai', 'yu-mei-ren', 'nian-nu-jiao-chibi', 'sheng-cha-zi-yuanxi', 'shui-diao-getou', 'bo-chuan-guazhou'] },
  { name: '草木', ids: ['sheng-sheng-man', 'yi-shandong-xiongdi', 'shan-ju-qiu-ming', 'guo-guren-zhuang', 'guo-ling-tan', 'li-sao', 'deng-gao', 'guan-cang-hai'] },
  { name: '花', ids: ['chun-wang', 'sheng-sheng-man', 'yin-jiu-wu', 'mei-hua', 'yu-mei-ren', 'sheng-cha-zi-yuanxi', 'guo-guren-zhuang'] },
  { name: '关塞', ids: ['man-jiang-hong', 'song-yuan-er', 'chu-sai', 'zuoqian-languan', 'yu-jia-ao', 'baixuege'] },
  { name: '兵戈', ids: ['man-jiang-hong', 'nian-nu-jiao-chibi', 'chi-bi-dumu', 'yong-yu-le-jingkou', 'shi-er'] },
  { name: '相思', ids: ['xiang-si', 'jin-se', 'chang-hen-ge', 'li-sao'] },
  { name: '风', ids: ['yu-mei-ren', 'chi-bi-dumu', 'guo-ling-tan', 'deng-gao', 'guan-cang-hai', 'bo-chuan-guazhou', 'jihai-zashi', 'bie-dong-da', 'baixuege'] },
  { name: '禽鸟', ids: ['chun-wang', 'yin-jiu-wu', 'jin-se', 'chang-hen-ge'] },
  { name: '雪', ids: ['jiang-xue', 'mei-hua', 'zuoqian-languan', 'bie-dong-da', 'baixuege'] },
  { name: '酒', ids: ['duan-ge-xing', 'song-yuan-er', 'jiang-jin-jiu'] },
  { name: '马', ids: ['gai-xia-ge', 'chu-sai', 'yong-yu-le-jingkou', 'jihai-zashi', 'baixuege'] },
  { name: '柳', ids: ['song-yuan-er', 'sheng-cha-zi-yuanxi'] },
  { name: '雁', ids: ['sheng-sheng-man', 'yu-jia-ao', 'bie-dong-da'] },
  { name: '火', ids: ['chun-wang', 'shi-hui-yin'] },
];

// 每首诗 → 它的核心意象
export const poemXiang: Record<string, string[]> = {};
xiangGroups.forEach((g) => g.ids.forEach((id) => { (poemXiang[id] = poemXiang[id] || []).push(g.name); }));
