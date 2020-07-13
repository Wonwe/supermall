<!-- 分类页 -->
<template>
  <div>
    <div class="wrapper">
      <ul class="content">
        <li>asd91</li>
        <li>asd92</li>
        <li>asd93</li>
        <li>asd94</li>
        <li>asd95</li>
        <li>asd96</li>
        <li>asd97</li>
        <li>asd98</li>
        <li>asd99</li>
        <li>asd100</li>
        <li>asd1</li>
        <li>asd2</li>
        <li>asd3</li>
        <li>asd4</li>
        <li>asd5</li>
        <li>asd6</li>
        <li>asd7</li>
        <li>asd8</li>
        <li>asd9</li>
        <li>asd10</li>
        <li>asd11</li>
        <li>asd12</li>
        <li>asd13</li>
        <li>asd14</li>
        <li>asd15</li>
        <li>asd16</li>
        <li>asd17</li>
        <li>asd18</li>
        <li>asd19</li>
        <li>asd20</li>
        <li>asd21</li>
        <li>asd22</li>
        <li>asd23</li>
        <li>asd24</li>
        <li>asd25</li>
        <li>asd26</li>
        <li>asd27</li>
        <li>asd28</li>
        <li>asd29</li>
        <li>asd30</li>
        <li>asd31</li>
        <li>asd32</li>
        <li>asd33</li>
        <li>asd34</li>
        <li>asd35</li>
        <li>asd36</li>
        <li>asd37</li>
        <li>asd38</li>
        <li>asd39</li>
        <li>asd40</li>
        <li>asd41</li>
        <li>asd42</li>
        <li>asd43</li>
        <li>asd44</li>
        <li>asd45</li>
        <li>asd46</li>
        <li>asd47</li>
        <li>asd48</li>
        <li>asd49</li>
        <li>asd50</li>
        <li>asd51</li>
        <li>asd52</li>
        <li>asd53</li>
        <li>asd54</li>
        <li>asd55</li>
        <li>asd56</li>
        <li>asd57</li>
        <li>asd58</li>
        <li>asd59</li>
        <li>asd60</li>
        <li>asd61</li>
        <li>asd62</li>
        <li>asd63</li>
        <li>asd64</li>
        <li>asd65</li>
        <li>asd66</li>
        <li>asd67</li>
        <li>asd68</li>
        <li>asd69</li>
        <li>asd70</li>
        <li>asd71</li>
        <li>asd72</li>
        <li>asd73</li>
        <li>asd74</li>
        <li>asd75</li>
        <li>asd76</li>
        <li>asd77</li>
        <li>asd78</li>
        <li>asd79</li>
        <li>asd80</li>
        <li>asd81</li>
        <li>asd82</li>
        <li>asd83</li>
        <li>asd84</li>
        <li>asd85</li>
        <li>asd86</li>
        <li>asd87</li>
        <li>asd88</li>
        <li>asd89</li>
        <li>asd90</li>
        <li>asd91</li>
        <li>asd92</li>
        <li>asd93</li>
        <li>asd94</li>
        <li>asd95</li>
        <li>asd96</li>
        <li>asd97</li>
        <li>asd98</li>
        <li>asd99</li>
        <li>asd100</li>
      </ul>
    </div>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import BScroll from 'better-scroll'

import { backTopMixin } from 'common/mixin'

export default {
  name: 'Category',
  mixins: [backTopMixin],
  mounted() {
    new BScroll('.wrapper')
  }
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  background-color: #999;
  overflow: hidden;
}
</style>
