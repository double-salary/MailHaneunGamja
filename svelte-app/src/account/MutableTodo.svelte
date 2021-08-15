<!-- <script>

	export let bookmark;

	let li;

	// afterUpdate(() => {
	// 	flash(li);
	// });

    import { onMount } from 'svelte';
    import {
      getUserAction,
      updateUserAction,
      cancelBookmarkAction,
    } from '../store/user-data';
    import { getTitle } from './uri-info';
    document.body.classList.remove('disable-scroll');
  
    let name = '';
    let major = '';
    let studentId = '';
    let bookmarks = []
  
    $: userInfo = {
      name: name ? name : '',
      major: major ? major : '',
      studentId: studentId ? studentId : '',
    };
  
    onMount(async () => await onMountLaunch());
  
    async function onMountLaunch() {
      const userProfile = await getUserAction();
      name = userProfile.name;
      major = userProfile.major;
      bookmarks = userProfile.bookmarks;
      console.log(processedBookmarks);
    }
  
    const handleSubmit = async () => {
      if (editing) {
        console.log(name, major, studentId);
        console.log(userInfo);
        var updatedUser = await updateUserAction(userInfo);
        name = updatedUser.name;
        major = updatedUser.major;
        studentId = updatedUser.studentId;
      }
    };
  
    async function cancelBookmark(id) {
      bookmarks = await cancelBookmarkAction(bookmarks[id]);
    }
  
    $: processedBookmarks = processBookmarks(bookmarks);
  
    function processBookmarks(bookmarks) {
      let res = [];
      bookmarks.forEach((bookmark) => {
        let pathSlugs = getTitle(bookmark);
        let segments = pathSlugs.split('/');
        console.log(segments);
        if (segments == 2) {
          res.push({ lc: segments[0], mc: undefined, sc: segments[1] });
        } else {
          res.push({ lc: segments[0], mc: segments[1], sc: segments[2] });
        }
      });
      return res;
    }
  
    let editing = false;
  </script>


the text will flash red whenever
		the `todo` object changes -->

<!-- <li bind:this={li} class="bookmark-box">
    <div class="bookmark-categories">
        <div class="bookmark-lcmc">
            <div class="large-category">{ bookmark.lc }</div>
            {#if bookmark.mc == "undefined"}<div></div> {:else}<div class="medium-category">{ bookmark.mc }</div>{/if}            
        </div>
        <a href="{bookmarks[id]}" class="small-category">{ bookmark.sc }</a> -->
        <!-- <a href="#/{bookmarks[bookmark.id]}" class="small-category">{ bookmark.sc }</a>
    </div>
    <img on:click src="../resources/img/bookmark-solid.svg" alt="bookmark"width="16" height="22" viewBox="0 0 16 22">
</li> -->