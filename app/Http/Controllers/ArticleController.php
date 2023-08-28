<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $articles = Article::all();

        // TODO: show avg rating, how many users rated.

        return response()->json($articles);
    }


    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::where('id', $id)->first();

        $ratings = $article->ratings;
        $articleRating = 0;
        foreach ($ratings as $rating) {
            $articleRating += $rating->rating;
        }

        $article->avg_rating = $articleRating / count($ratings);

        // TODO: show email of author.

        return response()->json(ArticleResource::make($article));
    }
}
